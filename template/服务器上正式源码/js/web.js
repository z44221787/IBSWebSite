$(function(){
    $('.caidanicon').click(function(){
        if($(this).is('.active')){
            $(this).removeClass('active');
            $('.nav').css('left','-200px');
        }else{
            $(this).addClass('active');
            $('.nav').css('left','0px');
        }
    });

    $(window).scroll(function(){
        $('.caidanicon').removeClass('active');
        $('.nav').css('left','-200px');
    })

})