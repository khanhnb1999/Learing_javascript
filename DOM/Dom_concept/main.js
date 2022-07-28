/*
1. DOM là gì?
2. Nhiệm vụ của DOM Javascript là gì?
3. Các loại DOM trong Javascript
4. Đối tượng DOM document trong javascript
--document.getElementById
--document.getElementsByTagNamep
--document.getElementsByClassName
5. Câu hỏi thường gặp về DOM Javascript
--DOM là viết tắt của từ gì?
--HTML DOM là gì?
--Dom element là gì?
--Dom manipulation là gì?
*/

/* 1:Khái niệm về DOM
--Là viết tắt của chữ Document Object Model(mô hình các đối tượng trong tài liệu HTML ).
--Truy xuất đến các thẻ HTML 1 cách dễ dàng
--Muốn truy xuất đến 1 thẻ html nào thì phải thông qua đối tượng doucment
*/

//Example:
var testDemo = document.getElementById('demo');
demo.innerHTML = "Tôi đang học javascript HTML DOM";
//Ý nghĩa: Tìm thẻ có id="demo" và gán nội dung HTML cho phần tử đó


/*2:Nhiệm vụ của DOM javascript
   + Cho phép truy xuất đến các thẻ HTML
   + Thay đối các thuộc tính của thẻ HTML
   + Thay đối css của các thẻ HTML
   + Tạo,xóa,thêm các thẻ HTML
*/


/*
3:Các loại DOM trong javascript
  + DOM document: Lưu trữ toàn bộ các thành phần trong tài liệu website
  + DOM element: Truy xuất tới các thẻ HTML thông qua các thuộc tính như: class,id,name..
  + DOM HTML : Thay đổi nội dung và giá trị thuộc tính của các thẻ HTML
  + DOM CSS : Thay đổi hình dạng CSS của thẻ HTML DOM
  + DOM Event: Gán một sự kiên (onclick(),onsubmit()...) vào các thẻ HTML
  + DOM Listener: Lắng nghe các sự kiện tác động lên thẻ HTML đó
  + DOM Navigation: Quản lí,thao tác với các thẻ HTML,thể hiện mối quan hệ cha con của các thẻ HTML
  + DOM Node, nodelist: Thao tác với HTML thông qua đối tượng(Object)
*/


//4: Đối tượng DOM document trong javascript

//4.1:document.getElementById
//Truy xuất đến thẻ HTML thông qua ID(Nếu trong tài liêu của bạn bị trùng ID thì nó sẽ lấy thẻ HTML có ID trùng khớp đầu tiên)
//Example: document.getElementById("test") --> Lấy thẻ có id=test


//4.2: document.getElementByTagName
//Lấy tất cả các thẻ HTML có tên trùng với tham số truyền vào
//Example:document.getElementsByTagName('div')



//4.3: document.getElementByClassName
//Lấy tất cả các thẻ HTML có tên class trùng với tên tham số truyền vào
//Example:document.getElementsByClassName('wrapper');


//5: Câu hỏi thường gặp về DOM javascript

//5.1: DOM --> Viết tắt của Document Object Model

//5.2: HTML DOM --> Cách gọi khác của DOM trong javascript(dùng DOM để truy xuất đến các thẻ HTML và thay đổi dữ liệu cho thẻ HTML đó)

//5.3: DOM element --> Truy xuất đến các thẻ HTML thông qua tên id,class,tên thẻ html

//5.4: DOM manipulation --> Thao tác DOM trong javascript