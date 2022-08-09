


  // obj:오브젝트 -- 이미지를 변수로 지정
  function on (obj) {
      obj.src = obj.src.replace('_off_', '_on_')
      //replace : 교체하다
      //src:에 있는 이미지명중 '_off.jpg'부분을'_on.jpg'로 바꾸겠다
  }
  
  function off (obj) {
      obj.src = obj.src.replace('_on_', '_off_')
  }
  
  // ----------카테고리 마우스 오버 이미지 변환효과




  
$(function(){





    $(function(){
      $('.categori_btn_o').click(function(){
          $('.menu_window').stop().animate({
            height : '100vh'
          }, 300)
          
          $('.categori_btn_o').removeClass('on')
          $('.categori_btn_C').addClass('on')
          
      })
  
  
      $('.categori_btn_C').click(function(){
          $('.menu_window').stop().animate({
            height : 0
          }, 300)
  
          $('.categori_btn_C').removeClass('on')
          $('.categori_btn_o').addClass('on')
      })
  
  
  }) 



     //  ---------햄버그 메뉴 열고 닫기 효과
    
    
      
    
    $('.slider').bxSlider({
      auto: true,
      controls: true,
    });

      //  ---------첫페이지 메인 슬라이더
    
    
      





    
        $('section').mousewheel(function(event, delta){
          event.preventDefault()
            if(delta > 0) { // mouse를 위로 스크롤했다면
                let prev = $(this).prev().offset().top
                // (this)현재 (prev)이전의 section(섹션) 탑값
                $('html, body').stop().animate({scrollTop:prev}, 1000)
                // ('html, body')중에 있는 다른 애니메이션들을 모두 멈추고 
                // prev 를 scrollTop(탑0)해라
            } else if (delta < 0) { // 위가 아닌 밑으로 스크롤했다면
                let next = $(this).next().offset().top
                // (this)현재 (next)다음의 section(섹션) 탑값
                $('html, boby').stop().animate({scrollTop:next}, 1000)
                // ('html, body')중에 있는 다른 애니메이션들을 모두 멈추고 
                // next 를 scrollTop(탑0)해라
            }
    
        })//mousewheel
    
    
    
    
    //  ---------마우스 휠 페이지 전환효과
    
    
    
    
      
        $('.center_Slider_box').slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows : true,
    
            // dots: true,
    
        
            mobileFirst: true,
            centerMode: true,
            centerPadding: '40px',
            centerScale: 1.5,
            slidesToShow: 1,
            vertical: false,
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3,
                  vertical: false
                }
              },
              {
                breakpoint: 601,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3,
                    vertical: true
                }
            }
            ]
          });
    
    
    
    
    
    //  ---------슬릭 슬라이드 센터모드  |  section_02 - 셰프의 팁 페이지에서 사용
    
    
      
        $('.best_recipe_Slider_box_0').slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows : true,
            lazyLoad: 'ondemand',
            
            // dots: true,
    
        
            // centerMode: true,
            mobileFirst: true,
            centerMode: false,
            centerPadding: '60px',
            centerScale: 1.5,
            slidesToShow: 2,
            vertical: true,
            responsive: [
              {
                breakpoint: 1025,
                settings: {
                  arrows: false,
                  centerMode: false,
                  centerPadding: '40px',
                  
                //   SlidesPerRow: 2,
                //   slidePerRow: 2,
                  slidesToShow: 4,
                  slidesPerRow: 1,
                  vertical: false,
                }
              },
              {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    rows: 2,
                    vertical: true,
                }
            }
            ]
          });
    

    //  ---------슬릭 슬라이더  |  section_04 - best_recipe_page에서 사용






































    })
    
    




