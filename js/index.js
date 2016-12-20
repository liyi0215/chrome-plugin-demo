$(function(){
    console.info('jquery-chrome-plugin. body:', $('body'));
    // var menu = $("#s_menus_wrapper");
    // if(menu != null){
    //     menu.append('<i class="fa fa-times-circle" aria-hidden="true" style="font-size:24px;"></i>')
    // }
    noInterest();
    $(document).ajaxComplete(function(){
        noInterest();
        console.info('ajaxComplete-chrome-plugin');
    })
    function noInterest(){
        if($('.dustbin')){
            $('.dustbin').html('不感兴趣').attr("style","width:60px;color:white;background:cornflowerblue;border-radius: 5px;padding: 2px 0;text-align: center;");
        }
    }
});

chrome.extension.sendRequest({greeting: "hello"}, function(response){
    console.info('sendRequest - response: ',response);
});