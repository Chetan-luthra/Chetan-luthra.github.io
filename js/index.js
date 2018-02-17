    $(window).on('scroll',function(){
    if($(window).scrollTop()){
    $('nav').addClass('black');
    }
    else{
      $('nav').romoveClass('black')
    }
    })
    $('.scroll-link').on('click',function(){
    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top},500);
    return false;
    });