'use strict';

XMLHttpRequest.prototype.call = function() {};

// Name at the top of a profile
var fullname = $('h1.searchable').text();

var profileLinks = $('a[href*="/profile/view"]').map(function() {
  return $(this).text();
}).get();

var nameArr = fullname.split(" ");

var forename = nameArr[0];

// Runs once this target (in this case the body element) has loaded
var target = document.body;

function findListedName(listOfNodes) {
  var listedName = [];

  for (var i = 0; i < listOfNodes.length; ++i) {
    var item = listOfNodes[i];
    // Links with class 'title' are profile names in the Project view', as well as 'similar profiles' or 'people also viewed' in the sidebar of a profile.
    // Links with class 'search-result-profile-link' are names in search results.
    if ((item.className === "title" || item.className === "search-result-profile-link") && (item.tagName === "A")) {
      listedName.push(item.textContent);
    } else if (item.childNodes.length > 0) {
      listedName = listedName.concat(findListedName(item.childNodes));
    }
  }
  return listedName;
}

function replaceName(name, replacement) {
  $("*:not(iframe)").contents().each(function() {
    if (name !== "" && this.nodeType === 3) {
      this.nodeValue = this.nodeValue.replace(name, replacement);
    }
  });
}


// Creates an observer instance - necessary for profile and search pages with AJAX requests still running after document ready
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var foundListedName = findListedName(mutation.addedNodes);
    if (foundListedName.length > 0) {
      for (var i = 0; i < foundListedName.length; ++i) {
        var listedName = foundListedName[i];
        replaceName(listedName, "Person");
      }
    }
  });
});

// Configuration of the observer:
var config = {
  childList: true,
  subtree: true
};

chrome.storage.sync.get("unbias", function(data){
  if (data["unbias"] === true) {
    // Passes in the target node, as well as the observer options
    observer.observe(target, config);

    // Replaces names of other profiles linked to from standard and public profiles
    for (var i = 0; i < profileLinks.length; ++i) {
      var profileLink = profileLinks[i];
      replaceName(profileLink, "Profile name");
    }

    // Replaces names in standard and public profiles
    replaceName(fullname, "Person's name");
    replaceName(forename, "Person");

    // On profile pages only
    if (window.location.href.indexOf("profile") > -1) {
      // This timeout is an unfortunately hacky solution to the fact that LinkedIn  
      // reloads the <title> tags after the document body.
      setTimeout(function(){
          $('title').remove();
      }, 1000);
    };
  } else {
    var path = chrome.extension.getURL('./deanonymise.css');
    
    $('head').append($('<link>')
        .attr("rel","stylesheet")
        .attr("type","text/css")
        .attr("href", path));
  }
})

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      location.reload();
    }
  }
);
