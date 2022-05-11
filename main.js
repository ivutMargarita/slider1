$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();    
        } else {
        $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
});

var $slide = $('.imoge'),
    $slideGroup = $('.group'),
    $bullet = $('.bullet');

var slidesTotal = ($slide.length - 1),
    current = 0;

$bullet.first().addClass('current');

var clickSlide = function() {
  //stop auto sliding
  var slideIndex = $bullet.index($(this));

  updateIndex(slideIndex);
};

var updateIndex = function(currentSlide) {
    current = currentSlide;

  $bullet.removeClass('current');
  $bullet.eq(current).addClass('current');

  transition(current);
};

var transition = function(slidePosition) {
    $slideGroup.animate({
      'top': '-' + slidePosition + '00%'
    });
};

$bullet.on( 'click', clickSlide);    