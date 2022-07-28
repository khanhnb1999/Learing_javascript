/*
1. Location trong javascript là gì?
2. Các phương thức của location trong javascript
   + window.location.reload(url) - tải lại trang web
   + window.location.replace(url) - ghi đè trang web
   + window.location.assign(url) - load một trang mới
3. Các thuộc tính của location trong Javascript
*/



/*
1. Location trong javascript là gì?
-- Là 1 đối tượng được dùng để xứ lí các vấn đề liên quan đến URL của trang web trên trình duyệt
-- Khi sử dụng thì phải thông qua đối tượng window
*/


/*
2. Các phương thức của location trong javascript
   + window.location.reload(url) - tải lại trang web
   + window.location.replace(url) - ghi đè trang web
   + window.location.assign(url) - load một trang mới
*/


/*
    + window.location.reload(url) - tải lại trang web
*/

var button = document.getElementById('btn-button');

button.addEventListener('click', function () {
    window.location.reload();
});


/*
  + window.location.replace(url) - ghi đè trang web
  Có 2 cách: 
            + Window.location.href(url);
            + window.location.replace();
*/


var location_replace = document.getElementById('btn-button1');
var location_href = document.getElementById('btn-button2');



location_replace.addEventListener('click', function () {
    window.location.replace('https://www.w3schools.com/js/default.asp');
});


location_replace.addEventListener('click', function () {
    window.location.href = 'https://www.w3schools.com/js/default.asp';
});


/*
 + window.location.assign(url) - load một trang mới (Giống vs location.href)
*/

var assign = document.getElementById('btn-button2');

assign.addEventListener('click', function () {
    window.location.assign('https://www.w3schools.com/js/default.asp');
});


/*
3. Các thuộc tính của location trong Javascript
*/
//Demo:

console.log("hash:" + window.location.hash + "<br />");
console.log("host:" + window.location.host + "<br />");
console.log("hostname:" + window.location.hostname + "<br />");
console.log("href:" + window.location.href + "<br />");
console.log("origin:" + window.location.origin + "<br />");
console.log("pathname:" + window.location.pathname + "<br />");
console.log("port:" + window.location.port + "<br />");
console.log("search:" + window.location.search + "<br />");
