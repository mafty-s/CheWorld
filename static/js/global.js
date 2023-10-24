
window.setTimeout(function(){
$(".loading").fadeOut(500)


$('.mapContent .blocks .block').addClass('ani')

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


$('.creatMain .content3 .con .left .dec2 p .s1 ').hover(function(){
  $(this).find('.slide').stop()
  $(this).find('.slide').slideToggle(200)
})


$('.alertmodel .close').click(function(){
  $(this).parents('.alertmodel').fadeOut(200)
})


$('.game.map .leftInfor,.userInfor2>*,.game.map .typeItem').addClass('wow fadeInDown')

$('.game.map .controls ul').addClass('wow fadeInUp2')




$(".mapContent .blocks .block").on("mouseover", function() {

$(".mapContent .blocks .block").on("mousedown", function() {
  $(this).addClass('current')
});
$(".mapContent .blocks .block").on("mouseup", function() {
  $(this).removeClass('current')
});


});


$(".mapContent .blocks .block").on("mouseout", function() {


  $(this).removeClass('current')



});



$('.sideInfor .switch').click(function(){
  $('.sideInfor').toggleClass('current')
})










var scale = 1.0; // 初始缩放比例
    var maxScale = 2.0; // 最大缩放比例
    var minScale = 0.5; // 最小缩放比例
    var step = 0.1; // 缩放步长

    $(".zoomable-div").on("wheel", function(event) {
        // 阻止页面滚动
        event.preventDefault();
        
        // 获取鼠标滚轮事件的 deltaY 值，正值表示向上滚动，负值表示向下滚动
        var delta = event.originalEvent.deltaY;

        // 计算新的缩放比例
        scale += (delta > 0) ? -step : step;
        
        // 限制缩放比例在最大和最小值之间
        if (scale > maxScale) {
            scale = maxScale;
        } else if (scale < minScale) {
            scale = minScale;
        }

        // 应用缩放
        $(this).css({
            transform: "scale(" + scale + ")"
        });
    });



});