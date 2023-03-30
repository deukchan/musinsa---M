$(function(){

  alert("확인용 메시지");

    /**
     * @스크롤내리면gnb메뉴고정
     */
    let lastScroll = 0;

    $(window).scroll(function(){
      curr = $(this).scrollTop();
      if(curr > 0){
          $('.gnb').addClass('fix')
      }else{
          $('.gnb').removeClass('fix')}
      })
      $(window).trigger('scroll');

    /**
     * @메인슬라이드
     */  
    var MainSwiper = new Swiper(".mainswiper", {
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });

    /**
     * @브랜드스와이퍼
     */
    var brandSwiper = new Swiper(".brandswiper", {
      slidesPerView: 3.5,
      spaceBetween: 5,
      breakpoints:{
        460:{ //460 이상
          slidesPerView: 4.5,
          spaceBetween: 10,
        },
        768:{ //768 이상
          slidesPerView: 6.5,
          spaceBetween: 10,
        },
         1025:{ //1025 이상
          slidesPerView: 9.5,
          spaceBetween: 15,
        },
        1400:{ //1400-이상
         slidesPerView: 12.5,
          spaceBetween: 20,
        }
      }
    });


    $('.btnswiper .swiper-slide').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }else{
        $(this).addClass('active').siblings().removeClass('active');
      }
    })

    /**
     * @버튼스와이퍼
     */
    var btnSwiper = new Swiper(".btnswiper", {
      slidesPerView: 3.5,
      spaceBetween: 5,
      breakpoints:{
        768:{ //768 이상
          slidesPerView: 5.5,
          spaceBetween: 10,
        },
         1025:{ //1025 이상
          slidesPerView: 8.5,
          spaceBetween: 15,
        },
        1400:{ //1400-이상
         slidesPerView: 12.5,
          spaceBetween: 20,
        },
      },
    });
    /**
     * @전문관스와이퍼
     */
    var specialSwiper = new Swiper(".specialswiper", {
      slidesPerView: 1,
      spaceBetween: 15,
      breakpoints:{
        768:{ //768 이상
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
      },
      thumbs: {
        swiper: btnSwiper
      }
    });


    /**
     * @피드스와이퍼
     */
    var feedSwiper = new Swiper(".feedswiper", {
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });

    /**
     * @라이브스와이퍼
     */
    var liveSwiper = new Swiper(".liveswiper", {
      slidesPerView: 2.5,
      spaceBetween: 5,
    });

    /**
     * @푸터사업자정보토글버튼
     */
    $('.footer .btn-info').click(function(){
      $('.footer .info').toggleClass('active');
    })

    /**
     * @상단으로가는버튼
     */
    $('.btn.top').click(function(){
      window.scrollTo({top:0,behavior:'smooth'})
    })




    /**
     * @섹션브랜드의브랜드버튼누르면데이터연동
     */
    $('.sc-brand .brandswiper .swiper-slide').click(function(e){
      e.preventDefault();
      sort = $(this).data('sort');

      prdList(sort);

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      }else{
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })

    $('.sc-brand .brandswiper .swiper-slide:first-child').trigger('click')

    function prdList(num){
      fetch('./assets/data/productData.json')
        .then((response)=>response.json())
        .then((json)=>{
          data = json.items;
      
          let prdItem = ``;        
          
          result = data.filter(function(para){
              return para.sort.indexOf(num) >= 0;
            
          })
      
          result.forEach(element => {
              prdItem+= `<li class="product-item">
                            <div class="img-wrap">
                              <a href="" class="img-box">
                                <img src="${element.thumbnail}" alt>
                              </a>  
                              <button class="btn-like">
                                  <svg width="22" height="22" viewBox="0 0 22 22"><title>좋아요</title><defs><filter id="9vl3mev2pb3033224" width="116.4%" height="118.9%" x="-8.2%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha3033224" result="shadowBlurInner1" stdDeviation="1.5"></feGaussianBlur><feOffset in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha3033224" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix></filter><filter id="wtpsksbhjc3033224" width="129.6%" height="132.8%" x="-14.8%" y="-16.4%" filterUnits="objectBoundingBox"><feOffset in="SourceAlpha3033224" result="shadowOffsetOuter1"></feOffset><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1"></feGaussianBlur><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix></filter><path id="jnerokenza3033224" d="M9.997 5.398l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path><path id="fhomqf994d3033224" d="M2.54 4.69c-2.254 2.255-2.254 5.91 0 8.164l8.45 8.448 8.448-8.448c2.254-2.254 2.254-5.91 0-8.163l-.186-.178c-2.265-2.075-5.784-2.016-7.978.178l-.285.285-.285-.285c-2.254-2.255-5.91-2.255-8.163 0zm7.457.708l.992.992.993-.992c1.863-1.864 4.885-1.864 6.748 0 1.864 1.863 1.864 4.885 0 6.749l-7.74 7.741-7.742-7.741c-1.864-1.864-1.864-4.886 0-6.75 1.863-1.863 4.885-1.863 6.749 0z"></path></defs><g fill="none" fill-rule="evenodd"><g fill="black" opacity=".1" transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-inner"><use xlink:href="#jnerokenza3033224"></use><use filter="url(#9vl3mev2pb3033224)" xlink:href="#jnerokenza3033224"></use></g><g transform="translate(-343 -303) translate(188 120) translate(155 183)" class="opacity-heart-line"><use fill="#000" filter="url(#wtpsksbhjc3033224)" xlink:href="#fhomqf994d3033224"></use><use fill="#fff" xlink:href="#fhomqf994d3033224"></use></g></g></svg>
                              </button>
                            </div>          
                            <a href="" class="txt-box">
                                <strong class="title">${element.title}</strong>
                                <div class="price-box">
                                    <span class="price">${number(element.price)}원</span>
                                </div>
                            </a>
                        </li>`;
          })
          $('.sc-brand .product-list').html(prdItem);
        });
    }
    
    /**
     * @천단위콤마정규식
     */
    function number(num){
      return  num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }


})