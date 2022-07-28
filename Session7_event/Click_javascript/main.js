/*
1. Khi nào sử dụng sự kiện click trong Javascript?
2. Cú pháp sự kiện click trong Javascript
Cách 1: Gắn trực tiếp trên thẻ HTML
Cách 2: Gắn sự kiện click vào đối tượng DOM
3. Gán nhiều hành động cho sự kiện click cùng lúc
*/

/*
1:Khi nào thì sử dụng click trong javascript 
   +Cần bắt sự kiện thì click vào chức năng nào đó
   +Chức năng đó sẻ xảy ra khi người dùng click vào đối tượng đó 
*/


/*
2:Cú pháp sự kiện trong javascript
*/
//Cách 1: Gắn trực tiếp trên thẻ HTML
<element onclick="event_function()"></element>


/*
cách 2: Gắn sự kiện click vào đối tượng DOM

<input type="button" value="Click me" id="msgbtn"/>
<script>
    var input = document.getElementById('msgbtn');
    input.onclick = function(){
        alert('Bạn đã click vào thẻ này');
    };
</script>
*/