/*
1. Khai báo sự kiện submit bằng thẻ HTML form
2. Gọi đến một hàm Javascript khi submit
3. Dùng Javascript để submit form
*/

/*1: Khai báo sự kiện bằng thẻ HTML form
-Lưu ý: + Trả về true thì cho submit form
        + Trả về false thì không submit form
        <form method="post" action="" onsubmit="return false">
            <input type="submit" value="Submit"/>
        </form>

        <form method="post" action="" onsubmit="return true">
            <input type="submit" value="Submit"/>
        </form>
*/



//2: Gọi đến một hàm javascript khi submit

//Cách 1: Sử dụng thẻ HTML
//<form onsubmit="functionName">

// function myFunction() {
//     alert("Bạn đang sử dụng onsubmit trong thẻ HTML");
// }


//Cách 2: Sử dụng phương thức addEventListener()
//formObj.addEventListener("submit", functionName);
// var testForm = document.getElementById('test-form');
// var user = document.getElementById('username');

// testForm.addEventListener('submit', function () {
//     alert('Bạn đang sử dụng phương thức addEventListener');
// });


//Cách 3: Sử dụng thuộc tính onsubmit của đối tượng form
//formObj.onsubmit = function(){functionName};

// testForm.onsubmit = function () {
//     alert("Bạn đang sử dụng tính onsubmit của đối tượng form");
// }


/*3:Dùng javascript để submit form
<form method="post" action="" id="myform">
    <input type="button" onclick="submitForm()" value="Button"/>
</form>
<script>
    function submitForm(){
        document.getElementById('myform').submit();
    }
</script>
*/


var button = document.getElementById('btn');

button.addEventListener('click', testForm);

function testForm() {
    alert('Bạn đang sử dụng');
}