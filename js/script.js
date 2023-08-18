$(function(){

  // 헤더 gnb 이벤트
  
 
  $(window).scroll(function() {
   var headerWrap = $(".main-visual").offset().top;
    var window = $(this).scrollTop();
    
    if(headerWrap <= window) {
      $(".header").addClass('on')
    }else{
      $(".header").removeClass("on");
    }
  })


  //n1 호버 시 n1 드롭다운 메뉴 on
  // 가져오기
  // $('.depth2').hide();
  // let name=0;
  // $(this).mouseover(function(){
  //   name = $(this).attr('data-name');
  //   console.log(name)
  //   $('.depth2-wrap').find('.'+name).addClass('on');
  //   $('.depth2-wrap').find('.'+name).stop().slideDown();
  // });
  // $('.header').mouseout(function(){
  //   console.log(name)
  //   $('.depth2-wrap').find('.on').stop().slideUp();
  //   $('.depth2-wrap').removeClass('on');
  // });
  
  $('.depth2').hide();

  let name = $(this).find('.depth1-li').attr('data-name');
  console.log(name);
  $('.depth1').find('.'+name).mouseover(function(){
    $('.depth2-wrap').find('.'+name).stop().slideDown();
  });
  $('.depth2').mouseleave(function(){
    $('.depth2-wrap').find('ul').stop().slideUp();
  });
  


  // 메인 비주얼 재생 정지 이벤트, 마우스 반전 효과
 

  // let mainVisual = $('.main-visual').find('video');
  // $('.main-visual').mouseover(function(){
  //   mainVisual.get(0).pause();
  // }).mouseout(function(){
  //   mainVisual.get(0).play();
  // });

  // 푸터
  let sns=$('.sns').find('li a').get();
  console.log(sns);
  let snsClass = $('.sns').find('li a').attr('class');
  


  // sub-product filter-button 클릭 시 닫기
  let filterButton=$('.filter-button');
  $(this).click(function(){
    if($(this).find(filterButton).hasClass('up')){
      
      $('.filterContent').hide();
    }else{
      filterButton.removeClass('up');
    }
  });
  

  // sub page
  // prod-list 복제
  let listArray = $('.prod-list').get(),
  listCount = listArray.length;
  
  console.log(listCount);
  
  
//////
});