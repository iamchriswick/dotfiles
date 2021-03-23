chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {cmd: 'toggleSidebar'});
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tabId, {cmd: 'urlChange', change: changeInfo});
});


chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.cmd === 'getHTML') {
    sendResponse(document.getElementById('hr-homerun-container').innerHTML.trim());
  }

  if (msg.cmd === 'getContentMappings') {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", msg.baseUrl + "/content-mappings", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        try {
          var res = JSON.parse(xhr.responseText);
        }
        catch (e) {
          var res = {
            data: {
              authenticated: false,
              companies: [],
              content_mappings: {
                version: msg.contentMappings.version
              }
            }
          }
        }
        sendResponse(res.data);
      }
    };
    xhr.send();
    return true;
  }

  if (msg.cmd === 'signIn') {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", msg.baseUrl + "/signin");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        sendResponse(xhr.status);
      }
    };
    xhr.send(msg.formData);
    return true;
  }

  if (msg.cmd === 'signOut') {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", msg.baseUrl + "/signout");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        sendResponse(xhr.status);
      }
    };
    xhr.send();
    return true;
  }

  if (msg.cmd === 'storeData') {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", msg.url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        sendResponse(JSON.stringify({
          responseText: xhr.responseText,
          status: xhr.status
        }));
      }
    };
    xhr.send(msg.formData);
    return true;
  }
});
