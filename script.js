// 1. 找到页面上的 h1 元素
const title = document.querySelector("h1");
// 2. 给它装一个「点击」监听器
//    第一个参数是事件名，第二个是「点了之后要做什么」
title.addEventListener("click", function () {
  alert("你点到了标题！");
});