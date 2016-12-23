chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    i('content.script->background 通讯 - args:', arguments);
    if (request.greeting == 'hello') {
        sendResponse({
            "noInterest": true
        });
    } else {
        sendResponse({});
    }
});

chrome.webRequest.onCompleted.addListener(
    function (response) {
        var str = 'https://www.baidu.com/home/pcweb/data/mancardwater';
        if(response.url.indexOf(str) != -1){
            chrome.tabs.query({}, function(tabArr){
                for(var i = 0, len = tabArr.length; i < len; i++){
                    if(tabArr[i].url.indexOf('baidu.com') != -1){
                        chrome.tabs.sendRequest(tabArr[i].id, {noInterest:true})
                    }
                }
            })
        }
        return {responseHeaders: response.HttpHeaders}
    }, {
        urls: ["<all_urls>"]
    }, []
);