// 메뉴

$(".mainMenu>li").mouseover(function(){
  $(this).find(".subMenu").stop().slideDown();
}).mouseout(function(){
  $(this).find(".subMenu").stop().slideUp();
})

// 이미지 슬라이드

let film = document.querySelector(".imgSlidefilm");
let banner = film.getElementsByClassName("banner");

let currentIndex = 1;
let imgCnt = banner.length;
let time = 2000;
let x = 1920;

setInterval(function(){
  let trans = currentIndex * x;
  
  film.style.transform = "translateX(-"+ trans + "px)";
  currentIndex++;

  if (currentIndex == imgCnt){
    currentIndex = 0;
  }
}, time);  