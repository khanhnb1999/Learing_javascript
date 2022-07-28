/*
1:Kiểu String:Một đoạn text có nhiều ký tự được lưu trữ nó vào 1 biến
 */
var newbie = "Học lập trình javascript ";
var newbie1 = `Học lập trình javascript`;
console.log(newbie1);

//Nối chuỗi trong javascript
var fistName = 'Nguyen Binh ';
var lastName = 'Khanh';
var yourName = fistName + lastName;
console.log(yourName);

//Xử lí chuỗi trên nhiều dòng
var message = 'Tôi đang học lập trình '
    + 'miễn phí từ freetuts.net';
console.log(message);

//Ép chuỗi string trong javascript
//Từ khóa typeof trả về kiểu dữ liệu của biến
var number = 12;
console.log(typeof number);//Kiểu number

number = number.toString();
console.log(typeof number);//Kiếu string

//Một số hàm xử lí chuỗi trong javascript
var testString = '   Toi dang hoc lap TRINH javascript freetuts.net';

//1.Length -->Độ dài chuỗi
console.log(testString.length);

//2.Find index -->Tìm kiếm chuỗi trả về vị trí
console.log(testString.indexOf('dang'));

//3.Cut String --> Cắt chuỗi
console.log(testString.slice(4, 8));

//4.Replace --> Thay thế chuỗi
console.log(testString.replace('javascript', 'PHP'));

//5.conver to upper case --> chuyến chuỗi thành in hoa
console.log(testString.toLocaleUpperCase());

//6.conver to lower case --> chuyển chuỗi thành chữ thường
console.log(testString.toLocaleLowerCase());

//7.Trim --> loại bỏ ký tự khoảng trắng ỏ hai đầu
console.log(testString.trim());

//8.Split --> chuyển giá trị trong mảng thành Array
var language = 'javascript,php,html,css';
console.log(language.split(" , "));

//9.Get a character by index -->Truyền vào vị trí lấy giá trị trong chuỗi
var myString = 'Nguyen Binh Khanh';
console.log(myString.charAt(3));

//-------------------------------------------------------------
//2.Kiểu Number
var x = 10;
var y = 30;
var z = x + y;
console.log(z);

//Sử dụng hàm isNaN() để kiểm tra 1 biến có phải là số hay không
//Trả về false nếu biến đó là số
var number2 = 12;
console.log(isNaN(number2));//false
var number3 = 'khanh';
console.log(isNaN(number3));//true
console.log(typeof number2);//Trả về kiểu number

//Boolean
var isSuccess = true;

//Undefined type
var isUndefined;

//null
var inNull = null;

