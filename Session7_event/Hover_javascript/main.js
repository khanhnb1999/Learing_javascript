/*
1. Sự kiện hover trong javascript là gì?
2. Cách gọi sự kiện hover trong javascript
  +Cách 1: Gắn trực tiếp trên thẻ HTML
  +Cách 2: Gắn sự kiện hover thông qua đối tượng DOM
*/


/*
1:Sự kiện hover trong javascript là gì?
 + Khi bạn hover chuột vào 1 thẻ html thì ngay lập tức sẻ xảy ra sự kiện hover
*/

//2:Cách gọi sự kiện trong javascript
//Cách 1: Gắn trực tiếp trên thẻ HTML 

var infoName = document.getElementById('info');
var btnName = document.getElementById('btn');

btnName.addEventListener('mouseover', function () {
    infoName.style.display = 'block';
});