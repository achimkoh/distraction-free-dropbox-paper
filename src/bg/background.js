browser.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	browser.pageAction.show(sender.tab.id);
    sendResponse();
  });