/*
1. addEventListener là gì?
2. Cách dùng addEventListener trong Javascript
3. Dùng addEventListener thêm sự kiện cho window
4. Truyền tham số vào sự kiện trong hàm addEventListener
 */

/*
1:Khái niệm addEventListener là gì?
   --Là 1 phương thức tích hợp sẵn vào các đối tượng HTML thông qua cơ chế DOM
   --KHi sử dụng addEventListener thì bạn có thể bổ sung rất nhiều hành động vào sự kiện tại nhiều thời điểm khác nhau
    }
    //Cú pháp:
            obj.addEventListener('click', function () {
                 alert('Bạn đã đúp chuột vào thẻ input này');
            });
    + elementObject: Đối tượng thẻ HTML sử dụng DOM để lấy
    + addEventListener: Tên hàm
    + eventName: Tên sự kiện bỏ đi chữ on ví dụ: click,change...
    + function: Hàm sẻ được chạy khi eventName được kích hoạt
*/


//2:Cách dùng addEventListener trong javascript
//Example:Xây dựng chức năng khi nhập dữ liệu vào ô input thì sẽ hiện thị giá trị nó ra bên ngoài
//Dùng hàm addEventListener() thêm sự kiện
//Cách 1:
var user = document.getElementById('username');
var content = document.getElementById('result');
user.addEventListener('keyup', function () {
        content.innerHTML = user.value;
});

//Cách 2:
user.addEventListener('keyup', myFunction);
function myFunction() {
        content.innerHTML = user.value;
}

//Nếu giá trị nhâp vào có độ dài hơn 5 ký tự thì hiện thị thông báo
user.addEventListener('keyup', function () {
        if (user.value.length > 5) {
                alert('Bạn không được nhập giá trị có độ dài hơn 5 ký tự');
        }
});


//Không dùng hàm addEventListener()
var pass = document.getElementById('password');
var text = document.getElementById('demo');
pass.onkeyup = function () {
        text.innerHTML = pass.value;
}


//3:Dùng addEventListener thêm sự kiện cho window
// resize là sự kiện browser của trình duyệt
var zoomBrowser = document.getElementById('zoom');
window.addEventListener("resize", function () {
        zoomBrowser.innerHTML = "Bạn vừa zoom trình duyệt!";
        zoomBrowser.style.color = 'red';
        zoomBrowser.style.fontSize = '50px';
});


//4:Truyền tham số vào sự kiện trong hàm addEventListener
//Nếu bạn muốn tryền tham số vào thì bắt buộc phải tạo hàm khác rồi gọi nó từ hàm addEventListener
var btn_button = document.getElementById('btn');
btn_button.addEventListener('click', function () {
        sum(4, 5);
});


//Tạo hàm tính tổng
function sum(a, b) {
        alert(a + b);
}

//4:Lời kết
// Sử dụng hàm addEventListener sẽ tốt và chuyên nghiệp hơn

var theTime = document.getElementById('time');

function date() {
        theTime.innerHTML = Date();
}