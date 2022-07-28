/*
1. Sự kiện window.onload là gì?
2. Hiểu về quá trình biên dịch trong Javascript
--Trường hợp file js riêng
--Trường hợp đặt trong thẻ html
T--rường hợp đặt trong nhiều thẻ script
3. Ví dụ về sự kiện onload trong Javascript
 */

/*
1:Khái niệm window.onload: --Khi trình duyêt đã load xong mọi thứ(image,js,css) 
thì những đoạn code nằm bên trong nó sé được chạy
                          --Cú pháp: window.onload = function() {
                              // code thực thi
                          }
 */

/*
2:Hiểu về quá trình biên dịch trong javascript
 */
function do_validate() {
    console.log("khái niệm window.onload");
}

//Trường hợp 1: file js riêng
// Javascript sẽ load tất cả dữ liệu file JS xong rồi mới biện dịch
//Example:
var flag = do_validate();
function do_validate() {
    // code here
}

function do_validate() {
    // return TRUE/FALSE;
}

//false
// Sai vì hàm do_validate chưa được định nghĩa
var flag = do_validate();
//<script src="a.js"></script>



//true
//<script src="a.js"></script>
var flag = do_validate();



//Trường hợp đặt trong thẻ html
//Khi gán 1 hàm nào đó cho 1 sự kiện nào đó trong HTML thì cũng phải tuân theo quy luật trên
//Khi gán 1 hàm mà phía trên thẻ HTML đó không có thì nó sẽ thông báo lỗi
//Example:
//false: vì code hàm do_validate() chưa được định nghĩa
/*
<button onclick="do_validate()">Click me</button>
    <script language="javascript">
      function do_validate()
      {
        // return TRUE/FALSE;
      }
    </script>
 */


//Trues
/*
<script language="javascript">
      function do_validate()
      {
        // return TRUE/FALSE;
      }
    </script>
    <button onclick="do_validate()">Click me</button>
 */


//Trường hơp 3:Đặt trong nhiều thẻ script
//Nếu trong sự kiện window.onload mà gọi tới 1 hàm nào đó thì sẽ không cần quan tâm đến việc hàm đó được đặt tại ví trí nào

//Example1
/*
<script>
    window.onload = function()
    {
        do_validate();
    };
</script>
<script>
    function do_validate()
    {
        alert(1);
    }
</script>
 */

//Example2: Nếu chạy theo thứ tự là 1-3-2 nhưng do sự kiện onload nên sẽ là 1-2-3
/*
alert(1);
 
window.onload = function()
{
    alert(3);   
};
 
alert(2);
 */