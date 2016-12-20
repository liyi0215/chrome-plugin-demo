function i(){
    console.info.apply(console, arguments)
}

chrome.browserAction.onClicked.addListener(function(){
    i('onClicked - args: ', arguments);
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    i('onRequest - args:', arguments);
    if(request.greeting == 'hello'){
        sendResponse({sendResponse: "sendResponseMsg"})
    }else{
        sendResponse({});
    }
});