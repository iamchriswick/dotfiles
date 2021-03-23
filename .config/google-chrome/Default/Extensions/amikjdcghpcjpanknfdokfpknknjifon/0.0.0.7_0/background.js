chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({unbias: true});    
});

chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.storage.sync.get("unbias", function(data){
    
    if (data["unbias"] === true){ // If unbias === true, set to false and change text
	   	chrome.storage.sync.set({unbias: false});
	   	chrome.browserAction.setIcon({path: 'iconpause48.png'});
      chrome.browserAction.setTitle({title: 'Unbias is Paused'});
    } else { // unbias === false, so set to true and change text
    chrome.browserAction.setIcon({path: 'icon48.png'});
		chrome.storage.sync.set({unbias: true});
    chrome.browserAction.setTitle({title: 'Unbias is Active'});
    }
});
  // 
 
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});



