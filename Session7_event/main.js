/*
1. Sự kiện trong javascript là gì?
2. Cách thêm / bắt sự kiện trong Javascript
--Cách 1: Bắt sự kiện trực tiếp trong thẻ HTML
--Cách 2: Bắt sự kiện cho một thẻ HTML bằng javascript
--Cách 3: Bắt sự kiện cho nhiều thẻ HTML bằng Javascrip
3. Các sự kiện (Events) trong javascrpt
--Bảng các sự kiện thường dùng trong javascript.
4. Các ví dụ về xử lý sự kiện trong javascript
 */

/*
//1:Khái niệm về sự kiện trong javascript
--Là 1 hành động tác động lên đối tượng HTML
-->Bắt được sự kiện và yêu cầu js thực thi chương trình nào đó
 */

document.getElementById('clickme').onclick = function () {
    var a = document.getElementById('demo');
    a.innerHTML = 'Cảm ơn bạn đã nhấp vào ô input';
    a.style.color = 'red';
    a.style.cursor = 'pointer';

}

/*
2:cách thêm/bắt sự kiện trong javascript
 */


//Cách1:Bắt trực tiếp trong thẻ HTML
// <h1 onclick = "do_function();">Nhấp vào thẻ h1 sẽ thực thi hàm</h1>
function do_function() {
    alert("Cảm ơn bạn đã nhấp vào thẻ h1");
}


//Cách2:Bắt trực tiếp cho 1 thẻ bằng javascript
//Cú pháp:
elementObject.eventName = function () {
    // code thực thi
}
/*
ElementObject là đối tượng HTML dùng DOM để lấy
EventName là tên của sự kiện như:onclick,onchange...
<button id="btn-onclick">Click me?</button>
document.getElementById("btn-onclick").onclick = function () {
            alert("cảm ơn bạn đã dùng sự kiện để bắt cho 1 thẻ HTML");
        }
 */


/*
//Cách3:Bắt sử kiện cho nhiều thẻ bằng javascript
<ul>
    <li><a href="#" class="show">Tin thể thao</a></li>
    <li><a href="#">Tin trong nước</a></li>
    <li><a href="#" class="show">Tin thời sự</a></li>
</ul>
<script>
var listShow = document.getElementsByClassName("show");
for (var i = 0; i < a_list.length; i++){
                a_list[i].onclick = function()
                {
                    alert('Xin chào, bạn vừa click vào tôi');

                    // return false để khỏi reload trang
                    return false
                };
            }
</script>
 */

/*
3:Các sự kiện trong javascript
--  onclick:Xảy ra khi click vào thẻ HTML
--  ondbclick:Xảy ra khi bouble click vào thẻ HTML...
*/

/*4:Các ví dụ về xử lí sự kiện trong javascript
<input type="text" id="message" value="" onkeyup="show_result();">
    <p id="result"></p>
function show_result() {
            var resultInput = document.getElementById('result');
            var messageInput = document.getElementById('message').value;
            resultInput.innerHTML = messageInput;
        }
*/

