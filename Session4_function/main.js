// Concept function
//Tập hợp 1 đoạn code cùng thực thi 1 nhiệm vụ
//Code sẽ ko biên dịch khi nó không được gọi đến
// Syntax tạo hàm
function name_of_function(var1, var2, var3) {
    //code thực thi
}


// function là từ khóa bắt buộc khi tạo 1 hàm
// name_of_function --> Tên của hàm
//var1, var2,var3 là các tham số truyền vào


//Example: Viết hàm kiểm tra số chẵn hay là số lẻ
function testNumber(number) {
    if (number % 2 == 0) {
        console.log("Số " + number + " là số chẵn");
    }
    else {
        console.log("Số " + number + " là số lẻ");
    }
}
// Cách gọi hàm:
testNumber(1);
testNumber(2);
testNumber(3);


//Hàm có return và không có return
//1:Hàm có return
function sumNumber(number1, number2) {
    return number1 + number2;
}
var number1 = 12;
var number2 = 23;
console.log("Hàm có giá trị trả về 2 số a và b là: " + sumNumber(number1, number2));


//2:Hàm không có return
function sumNumber1(so1, so2) {
    console.log("Hàm không có giá trị trả về của 2 số a và b là: " + (so1 + so2));
}
var number3 = 33;
var number4 = 44;
sumNumber1(number3, number4);


//Cách tạo hàm arrow function trong javascript(Phiên bản ES6)
var versionFunctionEs6 = (var1, var2, var3) => {
    //code thực thi
}
//(Tìm các số chia hết cho 3 theo version ES6)
var findDivisibleNumber1 = (n) => {
    if (n % 3 == 0) {
        console.log("Số " + n + " là số chia hết cho 3");
    }
    else {
        console.log("Số " + n + " là số không chia hết cho 3");
    }
}
findDivisibleNumber1(12);


//Tìm các giá trị chia hết cho 3 theo hàm thông thường
function findDivisibleNumber(number) {
    if (number % 3 == 0) {
        console.log("Số " + number + " là số chia hết cho 3");
    }
    else {
        console.log("Số " + number + " là số không chia hết cho 3");
    }
}
findDivisibleNumber(9);


//Hàm setTimeout và setInterval trong javascript
//1:Hàm setTimeout

setTimeout(function () {
    alert("Tôi đang sử dụng hàm setTimeout");
}, 3000);

var settimeout = function () {
    alert("Tôi sẽ xuất hiện trong vòng 3s ");
}
setTimeout(settimeout, 3000);


//2:Hàm setInterval
setInterval(function () {
    // alert('Tôi đang sử dụng hàm setInterval ');
}, 3000);
