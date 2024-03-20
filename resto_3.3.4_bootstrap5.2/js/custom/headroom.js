// 페이지 스크롤 시 헤더를 숨기거나 표시하는 기능
import Headroom from "headroom.js";

var myElement = document.querySelectorAll(".navbar-sticky");
myElement.forEach(function (e) {
  var headroom = new Headroom(e);
  headroom.init();
});
