/*
1. Sự kiện di chuyển chuột ra ngoài trong Javascript là gì?
2. Cách thêm sự kiện rời chuột onmouseout trong Javascript
--Cách 1: Thêm trực tiếp trong thẻ HTML
--Cách 2: Gắn hàm vào sự kiện onmouseout bằng mã Javascript
2. Một ví dụ kết hợp onmouseout và onmouseover trong Javascript
*/



/*
1. Sự kiện di chuột ra ngoài trong javascript là gì?
--Là sự kiện khi người dùng di chuyển con trỏ chuột ra ngoài phạm vi hiện thị của thẻ HTML
*/



//2: Cách thêm sự kiện rời chuột onmouseout trong javascript
//Cách 1;
function callMouseOut() {
    alert("Bạn đang sử dụng sự kiện onmouseout trong javascript")
}


//Cách 2:

var button = document.getElementById('btn');
var content = document.getElementById('item');

btn.addEventListener('mouseout', function () {
    content.style.display = 'block';
}); 