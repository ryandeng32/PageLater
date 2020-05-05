chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.directive) {
    case "popup-click":
      let currentURL = "";
      function getTab() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (
          tabs
        ) {
          currentURL = tabs[0].url;
          chrome.tabs.remove(tabs[0].id);
        });
      }
      getTab();

      setTimeout(function () {
        chrome.tabs.create({ url: currentURL });
      }, 5000);

      sendResponse({}); // sending back empty response to sender
      break;
    default:
      // helps debug when request directive doesn't match
      alert(
        "Unmatched request of '" +
          request +
          "' from script to background.js from " +
          sender
      );
  }
});
