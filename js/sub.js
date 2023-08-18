$(function(){
  $('.detail-info').click(function(){
    if($('.detail-info').next().hasClass('on') == true){
      $('.detail-info').next().removeClass('on');
    } else{
      $('.detail-info').next().addClass('on');
    };
  });

  /////// 서브 슬라이더


  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
   useTransform: true,
    speed: 400,
    accessibillity:true,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  });
 
  $('.slider-nav')
    .on('init', function(event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      focusOnSelect: true,
      infinite: true,
      arrows:true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
       }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
     }
      }]
    });
 
  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });
 
  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
 
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });
});