

//return array of buttons, hopefully just one
function getGrepperButtonElementFromSelection(){
    var selection = window.getSelection();
    if(selection.rangeCount > 0){
      var parentNode=selection.getRangeAt(0).startContainer.parentNode;
      return findGrepperOpenButtonsInNode(parentNode); 
    }
    return [];
}

function findGrepperOpenButtonsInNode(e){
    var buttons=e.querySelectorAll('.open_grepper_editor');
    if(buttons.length > 0){
        return buttons;
    }else{
        //not found
        if(!e.parentNode){
            return [];
        }
        return findGrepperOpenButtonsInNode(e.parentNode);    
    }
}



function grepperInjectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}

function makeRequest (method, url, data, id , token) {

// var id = localStorage.getItem('grepper_user_id');
// var token  = localStorage.getItem('grepper_access_token'); 


  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if(typeof id !=='undefined'){
        xhr.setRequestHeader("x-auth-id", id);   
    }
    if(typeof token !=='undefined'){
        xhr.setRequestHeader("x-auth-token", token);   
    }
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    if(method=="POST" && data){
        xhr.send(data);
    }else{
        xhr.send();
    }
  });
}


function grepperPage(hideIcons) {
  //this.endpoint="https://staging.codegrepper.com/api";
  this.endpoint="https://www.codegrepper.com/api";
  this.codeSearch={};
  this.user_id='';
  this.access_token='';
  this.lastSavedTime=false;
  this.lastSavedSelection=false;
  this.currentEditorLanguage="whatever";
  this.showingEditor=false;
  this.fastLoad = false;
  this.loadedCodeMirrorModes=[];
  this.hideIcons=hideIcons;
}

grepperPage.prototype.startsWith=function(str,word){
    return str.lastIndexOf(word, 0) === 0;
}

grepperPage.prototype.isFastLoad=function(){
    //note:highlight js breaks our snag button, so we need to load it after highlight js 
    var sites=[
        "https://developer.mozilla.org",
        "https://interactive-examples.mdn.mozilla.net",
        "https://www.geeksforgeeks.org",
        "https://jsfiddle.net/",
        "https://www.w3schools.com"
    ];
    for(var i=0;i<sites.length;i++){
        if(this.startsWith(window.location.href,sites[i])){
            return true;     
        }   
    }
    return false;
}




grepperPage.prototype.showGrepperAnswerSavedDialog=function(){

     var dialog = document.createElement("div");
     dialog.setAttribute("id","grepper_flash_message");
     dialog.textContent="Grepper Answer Saved!";
     document.body.appendChild(dialog);

  setTimeout(function(){ 
    dialog.parentNode.removeChild(dialog);
  },2000);
}

grepperPage.prototype.guessCodeLanguage=function(){

    var term =this.codeSearch.search;
    var allTerms = getLangaugeSearchTerms();
    var allPossibleTerms= [];

     getLanguageSelectOptions(function(options){
         for(var i =0;i< allTerms.length;i++){
            if((typeof options[allTerms[i].name]) !== 'undefined'){
                allPossibleTerms.push(allTerms[i]);        
            }    
         }

         //now try to find the answer
         for(var i =0;i< allPossibleTerms.length;i++){
             for(var j =0;j< allPossibleTerms[i].terms.length;j++){
                if( (term.toLowerCase().indexOf(allPossibleTerms[i].terms[j]+" ") !== -1) || (term.toLowerCase().indexOf(" "+allPossibleTerms[i].terms[j]) !== -1)) {
                    this.currentEditorLanguage = allPossibleTerms[i].name;  return;
                }
             }  
         }

        this.currentEditorLanguage = 'whatever';  return;

    }.bind(this));
    
}

grepperPage.prototype.init=function(){
    this.getCodeSearch().then(function(){
        if(this.codeSearch){
           this.guessCodeLanguage();
           this.getUserId();
           this.setupCopyListener();//todo: start implementing this
            
           if(!this.hideIcons){
                if(this.isFastLoad()){
                   this.fastLoad = true;
                   this.setupGrepperCodeEditorListener();
                }else{
                  this.fastLoad = false;
                  setTimeout(function(){ 
                    this.setupGrepperCodeEditorListener();
                  }.bind(this),600);
                }
            }
        }

    }.bind(this));
}

grepperPage.prototype.getUserId=function(){
  return new Promise(function (resolve, reject) {
    chrome.storage.sync.get(['grepper_user_id','access_token'], function(items) {
        this.user_id = items.grepper_user_id;
        this.access_token = items.access_token;
        resolve();
    }.bind(this));
  }.bind(this));
}

grepperPage.prototype.getCodeSearch=function(){
  return new Promise(function (resolve, reject) {
        chrome.runtime.sendMessage(
        {
          "action":"getAssociatedSearch",
          "url":window.location.href
        }, function(response) {
            this.codeSearch=response;
            resolve();
        }.bind(this));
    }.bind(this));
}

grepperPage.prototype.showEditor=function(content, answerSource){

answerSource = (typeof answerSource !== 'undefined') ? answerSource : 5;

if(this.showingEditor){
    return;    
}
 this.showingEditor=true;

 var that=this;
 var taysPopup = document.createElement("div");
     taysPopup.classList.add("tays_popup")
     taysPopup.setAttribute("id","grepper-editor");

 var taysPopupInner = document.createElement("div");
     taysPopupInner.classList.add("tays_popup_inner")

 var taysPopupTextAreaHolder = document.createElement("div");
     taysPopupTextAreaHolder.classList.add("tays_popup_textarea_holder")

 var taysPopupCloseButton = document.createElement("div");
     taysPopupCloseButton.classList.add("tays_popup_close_button")
     taysPopupCloseButton.textContent="X";
     taysPopupCloseButton.title="Close";

     taysPopupCloseButton.addEventListener('click',function(){
         that.closeEditor();
     });


/*
if(this.hideIcons){
 var taysPopupBlacklistHideShow = document.createElement("img");
     taysPopupBlacklistHideShow.classList.add("tays_popup_hide_grepper_button")
     taysPopupBlacklistHideShow.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAG80lEQVR4Xu2Zf4hc1RXHv+e+mZ1MYlaTxorFmooSQaRtSCHCJrv3vdl0E2nQKEsgCgnaltKUWqkaW9K6tgb88Y+oaUttaVptCm5To7GkO9k3786sSSg0CC22BbUUo5a4ribG7K47+84pb5NZJsPMvDezb0OWnfvf8M7Pzz3nvHfvEOb5onmeP1oAWhUwzwm0WmCeF0BrCLZaoNUC85xAqwXmeQG03gKtFmi1wDwncMFbYOPGjQtHR0evY+YlAC4F4AM4KSIjAN40xkxeyD2ZdQBr1qxZ0ma1rQfhZgCrffGvVWSpakmy+BOA9S9F8ioJ/Tm1MJU7ePDgp7MJZNYAOI7TKSzfBug2AMlmkmDmU6TwnGVZP3dd95/N2AjTiR2A1t2amB+BQkeY8waeCwH7yKKH4gYRGwCt9VUAniKoTbUTk+Mg9TyRDDJzsKMfpNNpa2xs7ErA+jKR3Mzsb1ZktVdtEWZfkbV7YnJ85+HDh083ALCmaCwAtHa2EfAUgMU1Ah8hpR4EeE/YkOvu7r7U92UHRO6r1TrM/C4pa5sx7uBMIcwIQDDRP/74zLOKsKV2IPQ3UnJrLpd7t5FgtdY3CWO/UuqKGnoCkSeWfXbZD/v7+4M3SVOraQBBySuolwVYWS/5ieK402y5ZjKZFezLYQDLavlgQZaINxtjTjZDoCkAmUzmBvZlAEDQ91UXM49YCfWlajvf09OzdGJiYj0JrRARgsJbyWTyL9ls9v1KY7ZtZyB0CKh9bmHB60S83hjzTqMQGgbQ2dm9kqg4qMhaWs8ZCb6Zy+eeLZfp7e1tGx4eeZiA7wFYUKFfBOEX4+NjO44ePTpW/szW9h6Attbzx+K/nUgkbNd1/9MIhIYAaK1vFJF8WPIA3hHwNeUDb9WqVcn2RZcdgJKe+ongSHv7onUHDhwYLck5jnOtMN6oVwVnZeW4QDqNMf+NCiEyAMdxlvu+f0SR9blQ4yKPe3lvR7mc1s5PCdgZqns2kd2e8b5zXhV0Oq9G/LZ4M9mW6KjWTtV8RwLQ0dGxuC2ZOgLgxigJKKGvunk36NuptWHDhvbRM2PvKaUWRdEHMDnpF68eGhr633QVaKdPgIci6TP+Koq1MWY8TD4SgK4uZ58iBJ+0kRYpXFU+/JwuZ5MQ/hRJ+ZyQgL5ujPvraQBdTq8QXohqg4V+l8+7dedGYCsUgNaZ7QR5JqrjqQIGp8vp2132/SB6vBEbBDyWM7kHSzqZrozNJLlGbAjwDWNyv6qnEwrAtu27IDS9E1ECSLYlLslms2fKyvc+AZ6IoluSEeBRY3I/KP3WOtNNkOm2imJLQHca4/5+RgACZa310wR13lCqZ9Rna0WhcCiY2lPLtu1bILQ/StAlGRLclcvnflMGYCtB9kS1UQmwll5oBQSKvb291sjwyH4BvhYpAJLNnudN9+u5IfoegEsi6QNFZdHnXdc9UVZFTwpwTyR9wh88L3fHVDeGrEgAAhvBd/8npz8ZAGhNmFFAfusZb1u5nG1nfgyRh8N1p2bIk8aYe8/T105QUdeF6RPwyqnTp247duxYMUw2eB4ZQCB8dicXZAG5qZ5xZj6TSFrLXdcNrrmmltY6oaBeDKsiFhSIuKd8iDqO4wjDDUtIwAfT6fSmRm6RGgJQgpBIpF5RhM56AVXbxQACCf2IRb5f+U3AzJ+SUk+n06mdFQmQ3ekchcLqugCY9i27YumW/v7+iTBQ5c8bBnBuNxcQW89Dye21nDGzTyrRbcygqZQJzvyTk7IOkOsVQAx6I5VKHBoYGPiwUlZrZwcBj4bAfkZrfU9fXx83knzDLVBuvK+vT+XzQ49AZPpVVemcxf/w3AHl740GdhZ0ZrPI5N5al6gAigK61xh3dzP2ZwSg5NC27dshFHxsXFYjiJMg2ep53stRgwzgFkzhAV/8XXVukN9WSm3xPC+4L2h6NdUCVUr66mKRn6s3Fwj44ySrnxQKg/+oEy05jrNOmHYB8pWa7SXYS8Tbm70EmfEMqBEYae3cLeI/Vu+4TMBrInIICq8T0zATWUrkSlFYCcEGAF+ombiPt1RCtnueF1zGxLJiqYDySII/QhKJtgdE/O8qshbGESUzn7BI7UotTP2ykVdcFN+xAyg5Xbt27eVJK3m37+NbysLyKMFUygTVwsDPFi9etLf8gqQZW7V0Zg1AyWEw0Ia8odVCcoswNBS+CCBdI6CPWPAaEbIAv2SM+XecyVazNesAKp0G54rh4eFriOgzImqJJfB98j9ibjtRKGSPz3bCVarsQru8uPxd8Aq4uNJv8DB0sQUfRzytCoiD4ly20aqAubx7ccTeqoA4KM5lG60KmMu7F0fsrQqIg+JcttGqgLm8e3HE3qqAOCjOZRv/B4H2oF8sAI88AAAAAElFTkSuQmCC";
     //taysPopupBlacklist.title="Don't load Grepper on this domain (right click for this page only)";
     taysPopupBlacklistHideShow.title="Show Grepper buttons on this domain (right click for this page only)";

     taysPopupBlacklistHideShow.addEventListener('contextmenu', function(ev) {
            that.blackList(window.location.href,8); ev.preventDefault(); return;
     });
     taysPopupBlacklistHideShow.addEventListener('click',function(e){
            that.blackList(window.location.href,4);
     });

}else{
 var taysPopupBlacklistHideShow = document.createElement("img");
     taysPopupBlacklistHideShow.classList.add("tays_popup_hide_grepper_button")
     taysPopupBlacklistHideShow.src="data:image/png;base64,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";
     //taysPopupBlacklist.title="Don't load Grepper on this domain (right click for this page only)";
     taysPopupBlacklistHideShow.title="Hide Grepper buttons on this domain (right click for this page only)";

     taysPopupBlacklistHideShow.addEventListener('contextmenu', function(ev) {
        that.blackList(window.location.href,6); ev.preventDefault(); return;
     });
     taysPopupBlacklistHideShow.addEventListener('click',function(e){
        that.blackList(window.location.href,2);
     });
}

 var taysPopupBlacklist = document.createElement("div");
     taysPopupBlacklist.classList.add("tays_popup_block_grepper_button");
     taysPopupBlacklist.innerHTML="&#8416;";
     taysPopupBlacklist.title="Don't load Grepper on this domain (right click for this page only)";
     //taysPopupBlacklistHideShow.title="Show Grepper buttons on this domain (right click for this page only)";
     taysPopupBlacklist.addEventListener('contextmenu', function(ev) {
            that.blackList(window.location.href,5); ev.preventDefault(); return;
     });
     taysPopupBlacklist.addEventListener('click',function(e){
            that.blackList(window.location.href,1);
     });

*/


 var taysPopupHeader1 = document.createElement("div");
     taysPopupHeader1.classList.add("tays_popup_header1")
     taysPopupHeader1.textContent="Your Grepper Answer to: \""+this.codeSearch.search+"\"";


    this.taysPopupSourceHolder = document.createElement("div");
    this.taysPopupSourceHolder.setAttribute("id","tays_popup_source_holder");

    this.taysPopupSourceHolderLabel = document.createElement("span");
    this.taysPopupSourceHolderLabel.textContent="Source:";
    this.taysPopupSourceHolderLabel.setAttribute("id","tays_popup_source_holder_label");
    this.taysPopupSourceHolder.appendChild(this.taysPopupSourceHolderLabel);

    //add in the source input 
    this.addSourceButton = document.createElement("a");
    this.addSourceButton.textContent = "Add Source";
    this.addSourceButton.title = "Add Source";
    this.addSourceButton.setAttribute("id","tays_add_source_button");

    this.taysPopupSourceText = document.createElement("span");
    this.taysPopupSourceText.setAttribute("id","tays_popup_source_text");
    this.taysPopupSourceText.title = "Edit Source";


    this.taysPopupSourceInput = document.createElement("input");
    //this.taysPopupSourceInput.value=window.location.href;
    this.taysPopupSourceInput.setAttribute("id","tays_popup_source_input");
    this.taysPopupSourceInput.setAttribute("placeholder","http://www.your-source-website.com");
    this.taysPopupSourceInput.value = window.location.href; 


    this.taysPopupSourceInputDelete = document.createElement("span");
    this.taysPopupSourceInputDelete.setAttribute("id","tays_popup_source_delete_button");
    this.taysPopupSourceInputDelete.textContent="x";
    this.taysPopupSourceInputDelete.title = "Delete Source";
    this.taysPopupSourceInputDelete.style.display = "none";

    this.taysPopupSourceInputCheck = document.createElement("span");
    this.taysPopupSourceInputCheck.setAttribute("id","tays_popup_source_check_button");
    this.taysPopupSourceInputCheck.textContent="✓";
    this.taysPopupSourceInputCheck.title = "Set Source";
    this.taysPopupSourceInputCheck.style.display = "none";







    this.taysPopupSourceHolder.appendChild(this.addSourceButton);
    this.taysPopupSourceHolder.appendChild(this.taysPopupSourceText);
    this.taysPopupSourceHolder.appendChild(this.taysPopupSourceInput);
    this.taysPopupSourceHolder.appendChild(this.taysPopupSourceInputCheck);
    this.taysPopupSourceHolder.appendChild(this.taysPopupSourceInputDelete);


    var that=this;


    this.addSourceButton.addEventListener('click',function(){
        that.addSourceButton.style.display="none";
        that.taysPopupSourceHolderLabel.style.display="inline-block";
        that.taysPopupSourceText.style.display="none";
        that.taysPopupSourceInput.style.display="inline-block";
        that.taysPopupSourceInputDelete.style.display="inline-block";
        that.taysPopupSourceInputCheck.style.display="inline-block";
        that.taysPopupSourceInput.focus();
    });

    this.taysPopupSourceText.addEventListener('click',function(){
        that.taysPopupSourceText.style.display="none";
        that.taysPopupSourceInput.style.display="inline-block";
        that.taysPopupSourceInputDelete.style.display="inline-block";
        that.taysPopupSourceInputCheck.style.display="inline-block";
        that.taysPopupSourceInput.focus();
    });


    //Basically clearing this input out
    this.taysPopupSourceInputDelete.addEventListener('click',function(){
            that.taysPopupSourceInput.value = '';
            that.taysPopupSourceText.textContent = that.taysPopupSourceInput.value;
            that.taysPopupSourceText.style.display="none";
            that.taysPopupSourceInput.style.display="none";
            that.taysPopupSourceInputDelete.style.display="none";
            that.taysPopupSourceInputCheck.style.display="none";
            that.taysPopupSourceHolderLabel.style.display="none";
            that.addSourceButton.style.display="inline-block";
    });

    
    this.taysPopupSourceInputCheck.addEventListener('click',function(){
            doneSettingsSource();
    });

    this.taysPopupSourceInput.addEventListener('keyup',function(event){
        if (event.key === "Enter") {
            doneSettingsSource();
        }
    });


   function doneSettingsSource(){
        if(!that.taysPopupSourceInput.value){
            that.taysPopupSourceText.textContent = that.taysPopupSourceInput.value;
            that.taysPopupSourceText.style.display="none";
            that.taysPopupSourceInput.style.display="none";
            that.taysPopupSourceInputDelete.style.display="none";
            that.taysPopupSourceInputCheck.style.display="none";
            that.taysPopupSourceHolderLabel.style.display="none";
            that.addSourceButton.style.display="inline-block";
        }else{
            if(that.isValidSource(that.taysPopupSourceInput.value)){
                that.taysPopupSourceText.textContent = that.maxLength(that.taysPopupSourceInput.value,64);
                that.taysPopupSourceText.style.display="inline-block";
                that.taysPopupSourceInput.style.display="none";
                that.taysPopupSourceInputDelete.style.display="none";
                that.taysPopupSourceInputCheck.style.display="none";
            }else{
                alert("Hmm, that source is not a valid URL. Be sure to use full url. ex: http://www.mywebsite.com/mypage.php");
            }
        }
   }

   this.taysPopupSourceText.textContent = this.maxLength(window.location.href,64);
   this.taysPopupSourceText.style.display="inline-block";
   this.taysPopupSourceInput.style.display="none";
   this.taysPopupSourceInputDelete.style.display="none";
   this.taysPopupSourceInputCheck.style.display="none";
   this.addSourceButton.style.display="none";
   this.taysPopupSourceHolderLabel.style.display="inline-block";



    //taysPopupInner.appendChild(taysPopupBlacklistHideShow);
    //taysPopupInner.appendChild(taysPopupBlacklist);
    taysPopupInner.appendChild(taysPopupCloseButton);
    taysPopupInner.appendChild(taysPopupTextAreaHolder)


    taysPopup.appendChild(taysPopupInner);

    this.codeEditorTextarea = document.createElement("textarea");
    this.codeEditorTextarea.innerHTML=content;


var languageGuessDisplayHolder = document.createElement("div");
    languageGuessDisplayHolder.setAttribute("id","languange_guess_display_holder");

  //add the team options 
    this.teams=[];
    makeRequest('GET', this.endpoint+"/get_my_teams.php?u="+this.user_id,{},this.user_id,this.access_token).then(function(data){
     this.teams=JSON.parse(data);
     if(this.teams.length > 0){

         this.teamsHolder = document.createElement("div");
         this.teamsHolder.setAttribute("id","grepper_teams_icon_holder");
         this.teamIcons=[];
         for(var i=0;i<this.teams.length;i++){
         this.teamIcons[i]= document.createElement("div");
         this.teamIcons[i].classList.add("grepper_team_select_icon_holder");
         this.teamIcons[i].setAttribute("grepper_team_name",this.teams[i].name);
         this.teamIcons[i].setAttribute("grepper_team_id",this.teams[i].id);

         if(this.teams[i].add_to_team){
             this.teamIcons[i].classList.add("grepper_team_icon_active");
             this.teamIcons[i].title="Adding answer to team "+this.teams[i].name;
         }else{
             this.teamIcons[i].title="Select to add answer to team "+this.teams[i].name;
         }

         this.teamIcons[i].addEventListener('click',function(){
             if(this.classList.contains("grepper_team_icon_active")){
                this.classList.remove("grepper_team_icon_active");
                this.title="Select to add answer to team "+this.getAttribute("grepper_team_name");
             }else{
                this.classList.add("grepper_team_icon_active");
                this.title="Adding answer to team "+this.getAttribute("grepper_team_name");
             }
         });

            var img=  document.createElement("img");
                img.src="https://www.codegrepper.com/team_images/50_50/"+this.teams[i].profile_image;

            this.teamIcons[i].appendChild(img);
            this.teamsHolder.appendChild(this.teamIcons[i]);
         }

        languageGuessDisplayHolder.appendChild(this.teamsHolder);
        languageGuessDisplayHolder.style.marginTop="12px";
    }
  
    }.bind(this));





    this.languageToSelect(this.currentEditorLanguage);
    languageGuessDisplayHolder.appendChild(this.editorCurrentLanguageSelect);

    taysPopupTextAreaHolder.appendChild(taysPopupHeader1);
    taysPopupTextAreaHolder.appendChild(languageGuessDisplayHolder);
    taysPopupTextAreaHolder.appendChild(this.codeEditorTextarea);
    taysPopupTextAreaHolder.appendChild(this.taysPopupSourceHolder)


 var taysPopupSaveButtonHolder = document.createElement("div");

 var taysPopupSaveButtonBottomNav = document.createElement("div");
     taysPopupSaveButtonBottomNav.classList.add("grepper_bottom_nav");

 var taysPopupSaveButton = document.createElement("div");
     taysPopupSaveButton.classList.add("grepper_save_button");
     taysPopupSaveButton.textContent = "Save Grepper Answer";

     taysPopupSaveButton.addEventListener('click',function(){
        var answer=that.codeEditor.getValue();
        that.saveAnswer(answer,answerSource);
        that.closeEditor();
        //that.showGrepperAnswerSavedDialog();
     });

    taysPopupSaveButtonBottomNav.appendChild(taysPopupSaveButton);
    taysPopupSaveButtonHolder.appendChild(taysPopupSaveButtonBottomNav);

    taysPopupInner.appendChild(taysPopupSaveButtonHolder);

    document.body.appendChild(taysPopup);


    this.languangeNametoTaysCodeMirrorName(
    this.currentEditorLanguage,
    function(mimeType){
       this.codeEditor = TaysCodeMirror.fromTextArea(this.codeEditorTextarea,{
                      lineNumbers: true,
                      theme:"prism-okaidia",
                      mode:mimeType,
                      viewportMargin: Infinity
                });
    }.bind(this));
}


grepperPage.prototype.closeEditor=function(){
    this.showingEditor = false;
    var editor=  document.getElementById("grepper-editor");
    editor.parentNode.removeChild(editor);
}

grepperPage.prototype.startsWith=function(str,word){
    return str.lastIndexOf(word, 0) === 0;
}

grepperPage.prototype.isValidSource=function(str){
   if(!str){
       return false;
   }
  if(!this.startsWith(str,"http://") && !this.startsWith(str,"https://")){
        return false;    
  }
  var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null);
}

grepperPage.prototype.maxLength=function(str,length){
    return str.length > length ? str.substring(0, length) + "..." : str;
}


grepperPage.prototype.getCodeContent=function(el){

    if(el.classList.contains("CodeMirror")){
        var lines=el.querySelectorAll(".CodeMirror-line");  
        var content="";
        for(var i=0; i < lines.length;i++){
            if(lines[i].textContent){
                content+=((lines[i].textContent).replace(/[\u200B-\u200D\uFEFF]/g, ''))+"\n";
            }
        }
    } else if(el.classList.contains("w3-code")){
        var cloneEl = el.cloneNode(true)
            cloneEl.innerHTML=cloneEl.innerHTML.replace(/<br\s*[\/]?>/gi,"\n")
       var content=cloneEl.textContent;
    } 
    else if(el.classList.contains("phpcode")){
      var cloneEl = el.cloneNode(true)
          cloneEl.innerHTML=cloneEl.innerHTML.replace(/<br\s*[\/]?>/gi,"\n")
       var content=cloneEl.textContent;

    } 
    else if(el.classList.contains("syntaxhighlighter")){
        var lines=el.querySelectorAll(".code .line");  
        var content="";
        for(var i=0; i < lines.length;i++){
            if(lines[i].textContent){
                content+=((lines[i].textContent).replace(/[\u200B-\u200D\uFEFF]/g, ''))+"\n";
            }
        }   
    } else if(el.classList.contains("crayon-main")){
        var lines=el.querySelectorAll(".crayon-line");  
        var content="";
        for(var i=0; i < lines.length;i++){
            if(lines[i].textContent){
                content+=((lines[i].textContent).replace(/[\u200B-\u200D\uFEFF]/g, ''))+"\n";
            }
        }   
    }
    
    else{
        var content=el.textContent;
    }
   return content;
}


grepperPage.prototype.getGrepperButton=function(el){
     var that=this;
     var grepper_menu = document.createElement("div");
         grepper_menu.classList.add("grepper_menu_holder");

    var editAnswerImg = document.createElement("div");
        editAnswerImg.classList.add("open_grepper_editor");
        editAnswerImg.title="Edit & Save To Grepper";

        editAnswerImg.addEventListener('click',function(){
           var content = that.getCodeContent(el);
          that.injectScript('codemirror/lib/codemirror.js', 'body',function(){
               that.showEditor(content);
          });
        });

        editAnswerImg.addEventListener('contextmenu', function(ev) {
              var content = that.getCodeContent(el);
               that.saveAnswer(content,6);
               //that.showGrepperAnswerSavedDialog();
               ev.preventDefault();
               return;
        }, false);

        return editAnswerImg;
}

grepperPage.prototype.addEditorToElement=function(el){
    var editAnswerImg = this.getGrepperButton(el);
     if(el.style.position === "static" || !el.style.position){
         el.style.position="relative";
     }
     el.appendChild(editAnswerImg);
}

/*
grepperPage.prototype.addEditorToElementsWpSytaxHighlighter=function(){
  setTimeout(function(){ 
        var pres = document.getElementsByClassName("syntaxhighlighter");
        conosole.log(pres);
        for (var i = 0; i < pres.length; i++) {
            var editAnswerImg = this.getGrepperButton(pres[i]);
              if(pres[i].style.position === "static" || !pres[i].style.position){
                     pres[i].style.position="relative";
               }
               pres[i].appendChild(editAnswerImg);
        }
   }.bind(this),2000);
}
*/


grepperPage.prototype.addEditorToCodeMirrorElements=function(elements){
    for (var i = 0; i < elements.length; i++) {
        this.addEditorToElement(elements[i],true);
    }
}

grepperPage.prototype.addEditorToElements=function(elements){
    for (var i = 0; i < elements.length; i++) {
        this.addEditorToElement(elements[i]);
    }
}

grepperPage.prototype.isCodeBoxCode=function(){

    if(document.querySelectorAll('.codebox pre').length > 0){
        return true;
    }else{
        return false;    
    }
    
}

grepperPage.prototype.isWpSytaxHighlighter=function(){
    //for (var i = 0; i < pres.length; i++) {
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src) {
          if(scripts[i].src.indexOf("plugins/syntaxhighlighter") !== -1){
              return true;
          }
      }
    }
   // }
    return false;
}


grepperPage.prototype.setupGrepperCodeEditor=function(){
   // var pres = document.querySelectorAll("pre, .w3-code, .CodeMirror");
//  var pres = document.querySelectorAll(".CodeMirror");
//  this.addEditorToCodeMirrorElements(pres);


     //detect various plugins here
     //var classes = el.className.split(/\s+/);
     //ok we are wp-syntax highligher 
     //https://businessbloomer.com/woocommerce-remove-rename-add-default-sorting-options-shop/
     //https://wordpress.org/plugins/syntaxhighlighter/

    var pres = document.querySelectorAll('.w3-code, pre:not(.CodeMirror-line), .phpcode, .syntaxhighlighter,.crayon-main');

     if(this.fastLoad){
        this.addEditorToElements(pres);
     }else if(this.isWpSytaxHighlighter()){
        setTimeout(function(){ 
            var pres = document.querySelectorAll('.syntaxhighlighter');
            this.addEditorToElements(pres);
        }.bind(this),2000);
     } else if(this.isCodeBoxCode()){
         //just ignore codebox
            //var pres = document.querySelectorAll('.syntax-highlighter');
            //this.addEditorToElements(pres);
     } else{
        this.addEditorToElements(pres);
     }


//grepperInjectScript(chrome.extension.getURL('js/setup_grepper_code_editor.js'), 'body');
    //console.log("setting up code editors");
    //first lets get the element then lets setup the editor on them
  //  var pres = document.querySelectorAll("pre, .w3-code, .CodeMirror");

//  var that=this;
//  setTimeout(function(){ 
//      //var pres = document.querySelectorAll(".CodeMirror");
//      //console.log(document.querySelectorAll(".CodeMirror")[0]);
//     // console.log(pres);
//      console.log(window.document.querySelectorAll(".CodeMirror"));
//      //console.log(pres[0].CodeMirror);
//      //that.addEditorToCodeMirrorElements(pres);
//  }, 8000);//give codemiror second to load

       //get stuff within iframe
  // var iframes = document.querySelectorAll("iframe");
  //for (var i = 0; i < iframes.length; i++) {
  //    var pres2 = iframes[i].contentWindow.document.querySelectorAll("pre, .w3-code, .CodeMirror");
  //    this.addEditorToElements(pres2);
  //}
}

grepperPage.prototype.setupGrepperCodeEditorListener=function(){
    var that=this;
    if(document.readyState === "complete" || document.readyState === "interactive") {
            that.setupGrepperCodeEditor();
    } else {
        window.addEventListener("DOMContentLoaded", function(){
            that.setupGrepperCodeEditor();
        });
    }
}

grepperPage.prototype.saveAnswer=function(answerText,source){
       if(!source){ source = 2;}

       var data={};
        data.answer=answerText;
        data.user_id=this.user_id;
        data.codeSearch=this.codeSearch;
        data.source=source;

        if(this.taysPopupSourceInput.value && this.isValidSource(this.taysPopupSourceInput.value)){
            data.source_url=this.taysPopupSourceInput.value;
        }else{
            data.source_url="";
        }

        if(this.editorCurrentLanguageSelect){
            data.language =this.editorCurrentLanguageSelect.value;
        }

        //save answer to teams
        if(this.teams.length){
             data.team_ids=[];
             for(var i=0;i<this.teamIcons.length;i++){
                 if(this.teamIcons[i].classList.contains("grepper_team_icon_active")){
                     data.team_ids.push(this.teamIcons[i].getAttribute("grepper_team_id"));
                 }
             }
        }

        makeRequest('POST', this.endpoint+"/save_answer.php",JSON.stringify(data)).then(function(responseData){
            //location.reload();
         var dataR=JSON.parse(responseData); 
            if(dataR.payment_required){
                var r = confirm("Oops! Looks like you need to activate Grepper, Activate now?");
                if (r == true) {
                    window.open("https://www.codegrepper.com/checkout/checkout.php", "_blank");
                } 
            }else{
                this.showGrepperAnswerSavedDialog();
            }
        }.bind(this));


}

grepperPage.prototype.setupCopyListener=function(){
        var that=this;

        window.grepperControlDown=false;
        that.ctrlPressedTime=false;

        document.addEventListener('keydown', function(event){

           if(event.key ==="Escape" && that.showingEditor){
                that.closeEditor();
           }

           if(event.key ==="Meta" || event.key==="Control"){
               window.grepperControlDown=true;
               var d=new Date();
               that.ctrlPressedTime=d.getTime();
           }
            //we trigger an open
           if((event.key === "g" || event.key === "G") && window.grepperControlDown ){

               var d=new Date();
               //this is a backup check so "g" can't accidently
               //get op without having pressed ctr in past 3 seconds
               if(d.getTime()-that.ctrlPressedTime < 3000){
                    var selection = document.getSelection().toString();
                       that.injectScript('codemirror/lib/codemirror.js', 'body',function(){
                            that.showEditor(selection,7);

                          });
                    event.preventDefault();
                    return false;
                }else{
                    window.grepperControlDown=false;
                }
                //that.saveAnswer(selection,7);
           }
        });

     document.addEventListener('keyup', function(event){
       if(event.key ==="Meta" || event.key==="Control"){
           window.grepperControlDown=false;
       }
    });

    
    /*
    document.addEventListener('copy', function(e){
        var selection = document.getSelection().toString();
        var d=new Date();
        if( (that.lastSavedTime) &&
            ((d.getTime() - that.lastSavedTime) < 1000) &&
            (that.lastSavedSelection === selection))
        {
        // var selection = document.getSelection().toString();
             that.showEditor(selection);

       //     that.saveAnswer(selection,3);
       //     that.showGrepperAnswerSavedDialog();
        }else{
        //  that.saveAnswer(selection,4);
          that.lastSavedTime=d.getTime();
          that.lastSavedSelection=selection;
           
        }
        }.bind(this));
    */

    //if we save answer twice in 2 seconds we count at is intentional
    // grepper add
}

grepperPage.prototype.blackList =function(url,blacklist_type) {
    var data={};
        data.url=url;
        data.blacklist_type = blacklist_type;

    makeRequest('POST', this.endpoint+"/blacklist.php",JSON.stringify(data),this.user_id,this.access_token).then(function(responseData){
            var dataR=JSON.parse(responseData); 
            //if we could save to backend,just rest to whatever is on the backend 
            if(dataR.success){
                chrome.storage.sync.set({grepper_blacklists: dataR.blacklists}, function() {
                    location.reload();
                });
            }else{
                alert("Ooops, You need to login to complete this action. Click the Grepper icon in the top right of your browser ↗ ");
                //require a login at this point

                //otherwise push onto current
                 // chrome.storage.sync.get(['grepper_blacklists'], function(all_items) {
                 //     var bl=all_items.grepper_blacklists;
                 //     if(!bl){ bl=[];}
                 //     bl.push(data);
                 //     console.log(bl);
                 //     chrome.storage.sync.set({grepper_blacklists: bl}, function() {
                 //     //location.reload();
                 //     });
                 // });
            }
    });

}


grepperPage.prototype.languangeNametoTaysCodeMirrorName =function(l,callback) {
  var mode ="javascript"

  if(l === "javascript"){ l="text/javascript" ; mode=["javascript"];}
  if(l === "php"){ l="text/x-php" ; mode=["clike","javascript","htmlmixed","css","php"];}
  if(l === "java"){ l="text/x-java" ;mode=["clike"];  }
  if(l === "csharp"){ l="text/x-csharp" ;mode=["clike"];  }
  if(l === "python"){ l="text/x-python" ;mode=["python"];  }
  if(l === "swift"){ l="text/x-swift" ;mode=["swift"];  }
  if(l === "objectivec"){ l="text/x-objectivec" ;mode=["clike"];}
  if(l === "cpp"){ l="text/x-c++src" ;mode=["clike"];  }
  if(l === "c"){ l="text/x-csrc" ;mode=["clike"];  }
  if(l === "css"){ l="text/css" ;mode=["css"];  }
  if(l === "html"){ l="text/html" ;mode=["xml","javascript","css","htmlmixed"];  }
  if(l === "shell"){ l="text/x-sh";mode=["shell"];  }
  if(l === "sql"){ l="text/x-mysql";mode=["sql"];  }
  if(l === "typescript"){ l="application/typescript";mode=["javascript"];  }
  if(l === "ruby"){ l="text/x-ruby" ;mode=["ruby"];  }
  if(l === "kotlin"){ l="text/x-kotlin" ;mode=["clike"];  }
  if(l === "go"){ l="text/x-go";mode=["go"];  }
  if(l === "assembly"){ l="text/x-gas";mode=["gas"]; }
  if(l === "r"){ l="text/x-rsrc";mode=["r"]; }
  if(l === "vb"){ l="text/x-vb";mode=["vb"]; }
  if(l === "scala"){ l="text/x-scala";mode=["clike"]; }
  if(l === "rust"){ l="text/x-rust";mode=["rust"]; }
  if(l === "dart"){ l="text/x-dart";mode=["dart"]; }
  if(l === "elixir"){ l="text/javascript";mode=["javascript"]; }
  if(l === "clojure"){ l="text/x-clojure";mode=["clojure"]; }
  if(l === "webassembly"){ l="text/javascript";mode=["javascript"]; }
  if(l === "fsharp"){ l="text/x-fsharp";mode=["mllike"]; }
  if(l === "erlang"){ l="text/x-erlang";mode=["erlang"]; }
  if(l === "haskell"){ l="text/x-haskell";mode=["haskell"]; }
  if(l === "matlab"){ l="text/javascript";mode=["javascript"]; }
  if(l === "cobol"){ l="text/x-cobol";mode=["cobol"]; }
  if(l === "fortran"){ l="text/x-fortran";mode=["fortran"]; }
  if(l === "scheme"){ l="text/x-scheme";mode=["scheme"]; }
  if(l === "perl"){ l="text/x-perl";mode=["perl"]; }
  if(l === "groovy"){ l="text/x-groovy";mode=["groovy"]; }
  if(l === "lua"){ l="text/x-lua";mode=["lua"]; }
  if(l === "julia"){ l="text/x-julia";mode=["julia"]; }
  if(l === "delphi"){ l="text/javascript";mode=["javascript"]; }
  if(l === "abap"){ l="text/javascript";mode=["javascript"]; }
  if(l === "lisp"){ l="text/x-common-lisp";mode=["commonlisp"]; }
  if(l === "prolog"){ l="text/javascript";mode=["javascript"]; }
  if(l === "pascal"){ l="text/x-pascal";mode=["pascal"]; }
  if(l === "postscript"){ l="text/javascript";mode=["javascript"]; }
  if(l === "smalltalk"){ l="text/x-stsrc";mode=["smalltalk"]; }
  if(l === "actionscript"){ l="text/javascript";mode=["javascript"]; }
  if(l === "basic"){ l="text/javascript";mode=["javascript"]; }


    var total=0;
    for(var i=0;i<mode.length;i++){
        this.injectScript('codemirror/mode/'+mode[i]+'/'+mode[i]+'.js', 'body', function(){
            total++;
            if(total === mode.length){
                callback(l);     
            }
        });
    }
}

grepperPage.prototype.injectScript = function(file, node ,callback) {
  if(this.loadedCodeMirrorModes.indexOf(file) === -1){
      this.loadedCodeMirrorModes.push(file);
      var message = { "action":"runContentScript", "file":file };
      chrome.runtime.sendMessage(message, function(response) {
          if(response.done) {
             callback(); 
          }
      });
   }else{
       callback();    
   }

}

grepperPage.prototype.languageToSelect =function(l){
    this.editorCurrentLanguageSelect  = document.createElement('select');
    this.editorCurrentLanguageSelect.setAttribute("id","languange_guess_display");
    this.editorCurrentLanguageSelect.addEventListener('change',function(){
        var l=this.editorCurrentLanguageSelect.value;
        this.languangeNametoTaysCodeMirrorName(l,function(mimeType){
            this.codeEditor.setOption("mode", mimeType);
        }.bind(this));
    }.bind(this));
    getLanguageSelectOptions(function(options){
        for (var key in options) {
              var opt = document.createElement('option');
                opt.value = key;
                opt.textContent = options[key];
                if(l===key){
                    opt.setAttribute("selected", "selected");
                }
                this.editorCurrentLanguageSelect.appendChild(opt);
        }
    }.bind(this));
}

function getLangaugeSearchTerms(){
    var terms=[
        {"name":"php","terms":["php"]},
        {"name":"javascript","terms":["javascript","js","java script","javscript"]},
        {"name":"typescript","terms":["typescript","ts","type script"]},
        {"name":"css","terms":["css"]},
        {"name":"html","terms":["html"]},
        {"name":"sql","terms":["sql","mysql"]},
        {"name":"java","terms":["java"]},
        {"name":"python","terms":["python"]},
        {"name":"cpp","terms":["cpp","c++"]},
        {"name":"shell","terms":["linux","shell","install","git","ubuntu","upgrade"]},
        {"name":"objectivec","terms":["objectivec","objective c","obj c","objc"]},
        {"name":"swift","terms":["swift"]},
        {"name":"csharp","terms":["c#","csharp","c #","c sharp"]},
        {"name":"ruby","terms":["ruby"]},
        {"name":"kotlin","terms":["kotlin"]},
        {"name":"javascript","terms":["jquery","viewjs","json","angular","express","redux","ajax","node","node js","node.js","nodejs","electron","reactjs","react js","react"]},
        {"name":"python","terms":["django","pandas","flask"]},
        {"name":"php","terms":["laravel"]},
        {"name":"csharp","terms":["asp.net","asp .net","asp net",".net"]},
        {"name":"ruby","terms":["rails"]},
        {"name":"assembly","terms":["assembly"]},
        {"name":"scala","terms":["scala"]},
        {"name":"dart","terms":["dart"]},
        {"name":"elixir","terms":["elixir"]},
        {"name":"clojure","terms":["clojure"]},
        {"name":"webassembly","terms":["webassembly","web assembly"]},
        {"name":"fsharp","terms":["fsharp","f#","f #","f sharp"]},
        {"name":"erlang","terms":["erlang"]},
        {"name":"matlab","terms":["matlab","mat lab"]},
        {"name":"fortran","terms":["fortran"]},
        {"name":"perl","terms":["perl"]},
        {"name":"groovy","terms":["groovy"]},
        {"name":"julia","terms":["julia"]},
        {"name":"prolog","terms":["prolog"]},
        {"name":"pascal","terms":["pascal"]},
        {"name":"postscript","terms":["postscript","post script"]},
        {"name":"smalltalk","terms":["smalltalk"]},
        {"name":"actionscript","terms":["actionscript","action script"]},
        {"name":"basic","terms":["basic"]},
        {"name":"lisp","terms":["lisp"]},
        {"name":"abap","terms":["abap"]},
        {"name":"delphi","terms":["delphi"]},
        {"name":"vb","terms":["visual basic","vb.net","vb net"]},
        {"name":"lua","terms":["lua"]},
        {"name":"go","terms":["go"]}
   ]; 

    return terms;
}

function getAllLanguages(){
var options={
         "abap":{"name":"Abap","enabled":0},
         "actionscript":{"name":"ActionScript","enabled":0},
         "assembly":{"name":"Assembly","enabled":0},
         "basic":{"name":"BASIC","enabled":0},
         "dart":{"name":"Dart","enabled":0},
         "clojure":{"name":"Clojure","enabled":0},
         "c":{"name":"C","enabled":1},
         "cobol":{"name":"Cobol","enabled":0},
         "cpp":{"name":"C++","enabled":1},
         "csharp":{"name":"C#","enabled":1},
         "css":{"name":"CSS","enabled":1},
         "delphi":{"name":"Delphi","enabled":0},
         "elixir":{"name":"Elixir","enabled":0},
         "erlang":{"name":"Erlang","enabled":0},
         "fortran":{"name":"Fortran","enabled":0},
         "fsharp":{"name":"F#","enabled":0},
         "go":{"name":"Go","enabled":0},
         "groovy":{"name":"Groovy","enabled":0},
         "haskell":{"name":"Haskell","enabled":0},
         "html":{"name":"Html","enabled":1},
         "java":{"name":"Java","enabled":1},
         "javascript":{"name":"Javascript","enabled":1},
         "julia":{"name":"Julia","enabled":0},
         "kotlin":{"name":"Kotlin","enabled":0},
         "lisp":{"name":"Lisp","enabled":0},
         "lua":{"name":"Lua","enabled":0},
         "matlab":{"name":"Matlab","enabled":0},
         "objectivec":{"name":"Objective-C","enabled":1},
         "pascal":{"name":"Pascal","enabled":0},
         "perl":{"name":"Perl","enabled":0},
         "php":{"name":"PHP","enabled":1},
         "postscript":{"name":"PostScript","enabled":0},
         "prolog":{"name":"Prolog","enabled":0},
         "python":{"name":"Python","enabled":1},
         "r":{"name":"R","enabled":0},
         "ruby":{"name":"Ruby","enabled":0},
         "rust":{"name":"Rust","enabled":0},
         "scala":{"name":"Scala","enabled":0},
         "scheme":{"name":"Scheme","enabled":0},
         "shell":{"name":"Shell/Bash","enabled":1},
         "smalltalk":{"name":"Smalltalk","enabled":0},
         "sql":{"name":"SQL","enabled":1},
         "swift":{"name":"Swift","enabled":1},
         "typescript":{"name":"TypeScript","enabled":1},
         "vb":{"name":"VBA","enabled":0},
         "webassembly":{"name":"WebAssembly","enabled":0},
         "whatever":{"name":"Whatever","enabled":1}
    };  
    return options;
}

function getLanguageSelectOptions(callback) {
    //var options=getAllLanguages();
    chrome.storage.sync.get(['grepper_user_langs'], function(all_items) {
        if(!all_items.grepper_user_langs){
            var items=getAllLanguages();
            //set if its not set
            chrome.storage.sync.set({grepper_user_langs:items }, function() {});
        }else{
            var items=all_items.grepper_user_langs;
        }
        var myOptions={};
        for (var key in items) {
            if(items[key].enabled){
                myOptions[key]=items[key].name;
            }
        } 
        callback(myOptions);
    });

}


//don't run this on google
//todo:turn this logic back on
//todo: what iff there is no hide grepper_button or blacklists
if(window.location.href.indexOf("https://www.google.com") !== 0){
    chrome.storage.sync.get(['grepper_blacklists','hide_grepper_button'], function(all_items) {

        var dontLoad = false;
        var hideIcons = false;
        var blacklists = Array.isArray(all_items.grepper_blacklists) ? all_items.grepper_blacklists : []; 

        if(all_items.hide_grepper_button){
            hideIcons=true;
        }

        for(var i = 0;i<blacklists.length;i++){

            if (blacklists[i].blacklist_type === 1){
                  var a = document.createElement('a'); a.href = blacklists[i].url;
                    if(window.location.hostname === a.hostname){
                        dontLoad = true; 
                    }
            }else if (blacklists[i].blacklist_type === 2){
                 var a = document.createElement('a'); a.href = blacklists[i].url;
                    if(window.location.hostname === a.hostname){
                       hideIcons = true; 
                    }
            } else if (blacklists[i].blacklist_type === 3){
                  var a = document.createElement('a'); a.href = blacklists[i].url;
                    if(window.location.hostname === a.hostname){
                        dontLoad = false; 
                    }
            }else if (blacklists[i].blacklist_type === 4){
                 var a = document.createElement('a'); a.href = blacklists[i].url;
                    if(window.location.hostname === a.hostname){
                        hideIcons = false; 
                    }
            } else if (blacklists[i].blacklist_type === 5){
                    if(blacklists[i].url === window.location.href){
                        dontLoad=true;
                    }
            } else if (blacklists[i].blacklist_type === 6){
                 if(blacklists[i].url === window.location.href){
                       hideIcons=true;
                }
            } else  if (blacklists[i].blacklist_type === 7){
                    if(blacklists[i].url === window.location.href){
                        dontLoad=false;
                    }
            } else if (blacklists[i].blacklist_type === 8){
                 if(blacklists[i].url === window.location.href){
                       hideIcons=false;
                }
            }

        }

        if(dontLoad){
            return;    
        }
        window.grepper=new grepperPage(hideIcons);
        window.grepper.init();
    });
}
