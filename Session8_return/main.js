/*
1. Return true / false của function javascript
2. Return true/false trong sự kiện Javascript
3. Bài tập validate form sử dụng return trong javascript
 */

//1:Return true / false của function javascript
//Khi 1 hàm return false -->Trả về giá trị false(Thuộc kiểu boolean)
//Khi 1 hàm return true -->Trả về giá trị true(Thuộc kiểu boolean)
//Example:
function testReturn() {
    return true;
}
var result = testReturn();
console.log(result);

//Hàm kiểm tra số chẵn
function testNumber(number) {
    return (number % 2 == 0);
}
console.log(testNumber(3));//false
console.log(testNumber(4));//true
console.log(testNumber(5));//false


//2:Return true/false trong sự kiện javascript
//Nếu sự kiện return true thì cho phép sự kiện xảy ra
//Nếu sự kiện return false thì không cho phép sự kiện xảy ra
function check() {
    return false;
}
// <input type="text" onkeypress="return check();">


//Sự kiện onclick return false
//<input type="submit" onclick="return validate()" value="Submit"/>
function validate() {
    return false;
}


//3:Bài tập validate form sử dụng return trong javascript

function validateForm() {
    var username = document.getElementById('username');
    var passWord = document.getElementById('password');
    var rePassword = document.getElementById('re-password');

    if (username.value == "") {
        alert("Bạn chưa nhập tên đăng nhập");
        return false;
    }
    if (passWord.value == "") {
        alert("Mật khẩu không được để trống");
        return false;
    }
    if (rePassword.value != passWord.value) {
        alert("Mật khẩu bạn nhập không khớp");
        return false;
    }
    var message = document.getElementById('message');
    message.innerHTML = username.value;
    return true;

}
