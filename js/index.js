function noInterest() {
    if ($('.dustbin')) {
        $('.dustbin').html('不感兴趣').attr("style", "width:60px;color:white;background:cornflowerblue;border-radius: 5px;padding: 2px 0;text-align: center;");
    }
}

chrome.extension.sendRequest({
    greeting: "hello"
}, function (response) {
    if (response.noInterest) noInterest();
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    if(request.noInterest){
        setTimeout(function(){
            noInterest();
        },200);
    }
})