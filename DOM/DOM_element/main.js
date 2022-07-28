/*
1. Sử dụng getElementById để tìm theo ID
2. Sử dụng getElementsByTagName để tìm theo tên thẻ html
3. Sử dụng getElementsByClassName để tìm theo tên class
4. Sử dụng querySelectorAll để tìm theo CSS selector
*/

//1: Sử dụng getElementById để tìm theo ID
//Cú pháp: var element = document.getElementById('idname');
var userName = document.getElementById('demo');
userName.innerHTML = "Tôi đang sử dụng document.getElementById";


//2: Sử dụng getElementByClassName để tìm theo thẻ HTML
//Cú pháp: var element = document.getElementsByTagName('tagname');
var content = document.getElementsByTagName('h3');
var fullName = document.getElementById('full-name');
fullName.innerHTML = "Tên tôi là: " + content[0].innerHTML;


//3: Sử dụng getElementByClassName để tìm theo tên class
//Cú pháp: var element = document.getElementsByClassName('input');
var testName = document.getElementById('test-name');
var testClass = document.getElementsByClassName('test');
testName.innerHTML = "Tên tôi là: " + testClass[0].innerHTML + " sinh viên năm nhất";

//4: Sử dụng querySelectorAll để tìm theo CSS selector
//Cú pháp:var element = document.querySelectorAll("selector css");

var infoName = document.getElementById('info-name');
var infoTest = document.querySelectorAll('h6.info');
infoName.innerHTML = "Tôi đang học " + infoTest[0].innerHTML;

