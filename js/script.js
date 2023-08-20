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


  $('.depth2-wrap').find('.depth2').hide();
  $('.depth1').find('.n1').mouseover(function(){
    let name = $(this).attr('data-name');
    console.log(name);
    $('.depth2-wrap').find('.n1').slideDown();
    $('.depth2-wrap').find('.n5').slideUp();
    $('.depth2-wrap').find('.n2').slideUp();
    
    $('.depth2-wrap').mouseleave(function(){
      $('.depth2-wrap').find('.depth2').slideUp();
      
    });
  });
  $('.depth1').find('.n2').mouseover(function(){
    let name = $(this).attr('data-name');
    console.log(name);
    $('.depth2-wrap').find('.n1').slideUp();
    $('.depth2-wrap').find('.n2').slideDown();
    $('.depth2-wrap').find('.n5').slideUp();
    $('.depth2').mouseleave(function(){
      $('.depth2-wrap').find('.depth2').slideUp();
    });
  });
  $('.depth1').find('.n3').mouseover(function(){
    $('.depth2-wrap').find('.n1').slideUp();
    $('.depth2-wrap').find('.n2').slideUp();
    $('.depth2-wrap').find('.n3').slideUp();
  });
  $('.depth1').find('.n4').mouseover(function(){
    $('.depth2-wrap').find('.depth2').slideUp();
  });
  $('.depth1').find('.n5').mouseover(function(){
    let name = $(this).attr('data-name');
    console.log(name);
    $('.depth2-wrap').find('.n1').slideUp();
    $('.depth2-wrap').find('.n2').slideUp();
    $('.depth2-wrap').find('.n5').slideDown();
    $('.depth2-wrap').mouseleave(function(){
      $('.depth2-wrap').find('.depth2').slideUp();
    });
  });
  $('.header-top').mouseover(function(){
    $('.depth2-wrap').find('.depth2').slideUp();
  });




  // 메인 비주얼 재생 정지 이벤트, 마우스 반전 효과
 

  // let mainVisual = $('.main-visual').find('video');
  // $('.main-visual').mouseover(function(){
  //   mainVisual.get(0).pause();
  // }).mouseout(function(){
  //   mainVisual.get(0).play();
  // });

  // 푸터
  
  


  // sub-product filter-button 클릭 시 닫기
  $('.filter-content').hide();
  let filterButton=$('.filter-button');
  filterButton.click(function(){
    $(this).find('button').toggleClass('mirror');
    $(this).next('.filter-content').slideToggle();
  });
  

  // sub page
  // prod-list 복제
  let listArray = $('.prod-list').get(),
  listCount = listArray.length;
  
  console.log(listCount);
  
  
//////
});