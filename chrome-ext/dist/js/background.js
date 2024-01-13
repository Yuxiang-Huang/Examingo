chrome.action.onClicked.addListener(function (tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("js/index.html"),
    type: "popup",
    height: 300,
    width: 300,
  });
});
