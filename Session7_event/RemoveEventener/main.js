/*
1. removeEventListener trong Javascript
2. Ví dụ removeEventListener() trong Javascript
3. Lời kết
*/

/*1: removeEventListener trong Javascript
  --Xóa đi một hành động đã được gán trước đó
  Cú pháp: 
  object.removeEventListener("click", some_action);
*/
// Lấy đối tượng
var object = document.getElementById("something");

// Hanh động validate
function do_validate() {
    // do something
}

// Thêm hành động vào sự kiện click
object.addEventListener("click", do_validate);

// Xóa hành động validate vào sự kiện click
object.removeEventListener("click", do_validate);



//2:Ví Dụ removeEventListener trong Javascript

