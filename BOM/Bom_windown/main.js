/*
1. Window trong javascript là gì?
2. Window.innerHeight - lấy kích thước trình duyệt
3. Thao tác đối tượng window trong javascript
   +window.open() - mở một cửa sổ mới
   +window.close() - đòng cửa sổ
   +window.moveTo() - di chuyển cửa sổ
   +window.resizeTo() - thay đổi kích thước cửa sổ
   +window.location.href - lấy url website
*/


/*
1. Window trong javascript là gì?
-- Là 1 đối tượng của BOM ,có phương thức và thuộc tính để xử lí trình duyệt
*/

/*
2. Window.innerHeight - lấy kích thước trình duyệt
*/

// Lấy chiều cao trình duyệt
var heightBrowser = window.innerHeight
    || document.documentElement.clientHeight

console.log(heightBrowser);

// Lấy chiều rộng trình duyệts
var widthBrowser = window.innerWidth;
console.log(widthBrowser);

/*
3. Thao tác đối tượng window trong javascript
   + window.open() - mở một cửa sổ mới
   + window.close() - đòng cửa sổ
   + window.moveTo() - di chuyển cửa sổ
   + window.resizeTo() - thay đổi kích thước cửa sổ
   + window.location.href - lấy url website
*/

/* 
   + window.open() - mở một cửa sổ mới
   Cú pháp: window.open(url, name, options)
*/

var button1 = document.getElementById('btn-button1');
var button2 = document.getElementById('btn-button2');
var button3 = document.getElementById('btn-button3');
var button4 = document.getElementById('btn-button4');

var W3shool = null;

button1.addEventListener('click', function () {
    W3shool = window.open('https://www.w3schools.com/js/default.asp', 'W3shool', 'width=500,height=500');
});

/*
    + window.close() - đòng cửa sổ
*/

button2.addEventListener('click', function () {
    W3shool.close();
});


/*
    + window.moveTo() - di chuyển cửa sổ
*/

button3.addEventListener('click', function () {
    W3shool.moveTo(500, 100);
    W3shool.focus();
});


/*
   + window.resizeTo() - thay đổi kích thước cửa sổ
*/


button3.addEventListener('click', function () {
    W3shool.resizeTo(1000, 1000);
    W3shool.focus();
});


/*
    + window.location.href - lấy url website
*/

var url = window.location.href;
console.log(url);