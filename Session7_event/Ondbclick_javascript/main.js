/*
1. Khi nào sử dụng sự kiện ondbclick trong Javascript
2. Cú pháp sự kiện ondbclick trong Javascript
 +Cách 1: Gắn trực tiếp trên thẻ HTML
 +Cách 2: Sử dụng mã javascript để thêm sự kiện
*/

/*
1:Khi nào sử dụng sự kiện ondbclick trong Javascript?
--Khi bạn muốn bắt hành động nhấp đôi chuột
-->Khi nhấp chuột trái hai lần vào 1 thẻ HTML nào đó thì sử dụng ondbclick
*/


//2:Cú pháp sự kiện ondbclick trong Javascript
//Cách 1:

function callOndblick() {
    alert("Bạn đang sử dụng sự kiện ondbclick khi nhấp 2 lần");
}

//Cách 2: 

var btnOn = document.getElementById('btn');
var info = document.getElementById('demo');

btnOn.addEventListener('dblclick', function () {
    info.style.display = 'block';
});