/*
1. Cookie trong javascript là gì?
2. Các thao tác với Cookie trong Javascript
   + Tạo Cookie
   + Lấy giá trị Cookie
   + Đổi giá trị cho Cookie
   + Xóa Cookie
3. Viết hàm xử lý Cookie trong Javascript
4. Một số lưu ý khi sử dụng cookie trong javascript
*/

/*

1. Cookie trong javascript là gì?
   -- Dữ liệu được lưu trữ trong file text,nằm trong máy tính
*/

/*


2. Các thao tác với Cookie trong Javascript
   + Tạo Cookie
   + Lấy giá trị Cookie
   + Đổi giá trị cho Cookie
   + Xóa Cookie
*/

/*
2.1 Tạo cookie
   --Thiết lập thời gian sống cho cookie thì sử dụng từ khóa expires,
   đặt trong cấu trúc của chuỗi cookie 
*/

// Lữu trữ cookie
document.cookie = 'binhkhanh250399@gmail.com';

//Thiết lập thời gian cho cookie
document.cookie = 'binhkhanh250399@gmail.com; expires=Thu, 01 Jan 1970 00:00:00 UTC';

//Thay đổi đường dẫn thì dùng từ khóa path
// document.cookie = 'binhkhanh250399@gmail.com; expires=Thu, 01 Jan 1970 00:00:00 UTC;path=\';


/*
2.2: Lấy giá trị cookie
*/
var valueCookie = document.cookie;

/*
2.3: Đổi giá trị cho cookie
    -- Để thay đổi giá trị cho cookie thì gán lại giá trị cho cookie
*/

// Giá trị cũ: 
document.cookie = 'binhkhanh250399@gmail.com';

// Giá trị mới
document.cookie = 'binhkhanh250399@gmail.com';

/*
2.4: Xóa cookie
   -- Không có hàm xóa cookie mà phải sử dụng từ khó expires để thiết lập time cho cookie
*/

/*
3.Viết hàm xử lí cookie trong javascript 
*/



const date = new Date();

document.getElementById('demo').innerHTML = date;