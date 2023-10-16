
window.setTimeout(function(){
$(".loading").fadeOut(500)



var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();

},400)

$(document).ready(function(){
	$(window).load(function () {
          $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
          });
          $(".mobile-inner-nav li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
          $(".mobile-inner-nav li").click(function(){
            $(this).find('dl').slideToggle(200)
          })
        });

})

$(document).ready(function(){

$(".section_8 img").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });


$('.login .btns').addClass('wow fadeInUp')

$('.login .logo img').addClass('wow puffIn')


$('.alertModel .tab .left .check span').click(function(){
  $(this).toggleClass('current')
})

$('.alertModel .tab .left .bd .model li').click(function(){
  $(this).toggleClass('current')
  $(this).find('dl').stop()
  $(this).find('dl').slideToggle(200)
})

function height(){
  var sc = $(window).scrollTop();
  if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
}
height()
$(window).scroll(function () {
  height()
});

$('.alertModel .close').click(function(){
  $(this).parents('.alertModel').fadeOut(200)
})


function initTab(tab) {
  $(tab + ' .hd a').eq(0).addClass('current');
  $(tab + ' .model').hide();
  $(tab + ' .model').eq(0).show();
  $(tab + ' .hd a').click(function() {
    var thisa = $(tab + ' .hd a').index(this);
    $(tab + ' .hd a').removeClass('current');
    $(this).addClass('current');
    $(tab + ' .model').not($(tab + ' .model').eq(thisa)).hide();
    $(tab + ' .model').eq(thisa).stop().fadeIn(100);
  });
}

initTab('#tab1');
initTab('#tab2');
initTab('#tab3');






});