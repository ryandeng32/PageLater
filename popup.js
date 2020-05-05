// let currentURL = "";
// let currentTabId = -1;
// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//   // since only one tab should be active and in the current window at once
//   // the return variable should only have one entry
//   getCurrentPageInfo(tabs[0]);
// });

// // chrome.tabs.remove(currentTabId);
// var btn = document.getElementById("btnsave");
// btn.addEventListener("click", function () {
//   setTimeout(function () {
//     chrome.tabs.create({ url: currentURL });
//   }, 5000);
//   chrome.tabs.remove(currentTabId);
// });

// function getCurrentPageInfo(tab) {
//   currentTabId = tab.id;
//   currentURL = tab.url;
// }

function clickHandler(e) {
  chrome.runtime.sendMessage({ directive: "popup-click" }, function (response) {
    this.close(); // close the popup when the background finishes processing request
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("click-me").addEventListener("click", clickHandler);
});
