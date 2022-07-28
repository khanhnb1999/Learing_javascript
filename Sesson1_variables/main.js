/*
1. Các cách khai báo biến trong javascript
    -Khai báo biến trong JS bằng từ khóa var
    -Khai báo biến trong JS bằng từ khóa let
    -Khai báo biến trong JS bằng từ khóa const
2. Cách đặt tên cho biến trong Javascript
3. Cách gán giá trị cho biến trong javascript
4. Kiểu giá trị của biến trong Javascript
5. In giá trị của biến JS ra trình duyệt
6. Các phép toán thường dùng trên biến trong Javascript
*/

/* 
Khai báo biến trong js bằng từ khóa var
Khai báo bất kỳ ở đâu trong chương trình
*/
var userName = 'binh khanh';
console.log(userName);

/*
1.2Khai báo biến bằng từ khóa let
Không thể khai báo lại biến với từ khóa let
Phải được khai báo trước khi sử dụng
Các biến được khai báo trong khối sẽ không được truy cập từ bên ngoài khối
*/
let firstName = 'Nguyen Binh Khanh';
console.log(firstName);

/* 
1.3Khai báo biến bằng từ khóa const 
Không thể khai báo lại các biến được xác định với const
Phải gán giá trị ban đầu khi khai báo
Có phạm vị khối
Nên sử dụng khai báo từ khóa const:Array,Object,...
*/
const lastName = 'khanh nb';
console.log(lastName);

/*
2.Cách đặt tên cho biến trong js
Không được bắt đầu bằng số
Tên biến bắt đầu phải là chữ hoặc dấu
*/
var _userName;
var userName99;
var username, _userName, __userName99;

/*
3.Cách gán giá trị cho biến trong JS
Sử dụng dấu bằng để gán giá trị
 */
var _userName = 'Toi dang hoc javascript';

/*
4.Kiểu giá trị cho biến 
 */
var website = 'Toi dang hc javascript';//Kiểu String
var number = 12;//Kiếu INT
var float = 12.6;//Kiêu float

/*
5.In giá trị của biến js ra trình duyệt
 */
var yourName = "In gia tri cua bien ra trinh duyet";
document.write(yourName);

/*
6.Các phép toán thường dùng trong JS
Gán giá trị,cộng trừ nhân chia,nối chuỗi
 */
var myName = "Nguyen Binh";
var yourName1 = "Khanh " + myName;
console.log(yourName1);
var sumNumber = 12 + 30;
var devNumber = 30 / 5;