/*
1. Lấy nội dung trong thẻ HTML bằng Javascript
2. Thay đổi thuộc tính thẻ html bằng Javascript
3. Lời kết
*/

//1: Lấy nội dung trong thẻ thẻ html bằng Javascript
//Cú pháp: document.getElementById("content").innerHTML

var content = document.getElementById("demo");
var html = document.getElementById("text");
var button = document.createElement("btn");

btn.addEventListener("click", function () {
    html.innerHTML = "Tên tôi là: " + content.innerHTML;
});

//2: Thay đổi thuộc tính thẻ html bằng javascript 
//Cú pháp: document.getElementById("element").attributeName = "new value";

var textColor = document.getElementById("color");

var btnColor = document.getElementById("main");

btnColor.addEventListener("click", function () {
    textColor.style.color = "red";
});
