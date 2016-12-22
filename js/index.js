console.info('jquery-chrome-plugin. body:', $('body'));

function noInterest() {
    console.count('noInterest is run ...');
    if ($('.dustbin')) {
        $('.dustbin').html('不感兴趣').attr("style", "width:60px;color:white;background:cornflowerblue;border-radius: 5px;padding: 2px 0;text-align: center;");
    }
}

chrome.extension.sendRequest({
    greeting: "hello"
}, function (response) {
    console.info('sendRequest - response: ', response, response.noInterest);
    if (response.noInterest) noInterest();
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
    if(request.noInterest) setTimeout(function(){
        noInterest();
        console.warn('\n\n\n\n\n\n',request, '\n\n\n\n\n\n');
    },1000);
})