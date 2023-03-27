//💛 main 슬라이드
var swiper = new Swiper(".mainSwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        rows: 1,
      },
    },
    1200: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
  },
});




//💛 main 
$(".art2").mouseenter(function(){
$('.art2').addClass("on")
$('.mainSwiper').addClass("on")
}).mouseleave(function(){
$('.art2').removeClass("on")
$('.mainSwiper').removeClass("on")
})


//💛 제품소개
$.ajax({
type: "GET",
url: "/woongjin/js/woongjin_product.json",
dataType: "json",
success: function (data) {
  //💛 sec2 탭
$(".tab ul li").click(function(){
  let index = $(this).index()
  console.log(index)
  $(this).addClass('on').siblings().removeClass('on');
  $(".tab > div").eq(index).addClass('on').siblings().removeClass('on');
  $(".tab > div").empty()
  
  // 각 탭 내용 밀어넣기
  var elem = "";
  $.each(data[index], function () {
    // this는 각 obj를 의미한다.
    elem += `<div>`;
    elem += `<div class="product">`;
    elem += `<img src='${this.img}' alt='${this.name}'>`;
    elem += `<div class="hover">`;
    elem += `<p>${this.option}</p>`;
    elem += `<span>${this.component}</span>`;
    elem += `</div>`;
    elem += `</div>`;
    elem += `<p>${this.name}</p>`;
    elem += `</div>`;
  });
  $(".tab > div").eq(index).append(elem);
})
$(".tab ul li").eq(0).trigger('click');
  
},
error: function (xhr) {
console.log(xhr.status + "/" + xhr.errorText);
}
});
//탭 버튼
$(".tab ul li").click(function(){
$(this).addClass('button').siblings().removeClass('button');
});




//💛 se2 제품설명
$(document).on('mouseenter','.tab > div > div .product',function(){
$(this).addClass("on")
}).on('mouseleave','.tab > div > div .product',function(){
$(this).removeClass("on")
})

//💛sec3 탭
$(".tab2 ul li").click(function(){
$(".tab2 ul li").addClass('on')
var tabindex = $(this).index();
$(this).addClass('on').siblings().removeClass('on');
$(".tab2 .conBox").eq(tabindex).addClass('on').siblings().removeClass('on');
});
