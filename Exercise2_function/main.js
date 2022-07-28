//Dùng hàm viết chương trình cộng 2 số

//1:Hàm có return
function sumNumber(a, b) {
    var sum = a + b;
    return sum;
}
do {
    var a = parseInt(prompt("Nhập số a: "));
    var b = parseInt(prompt("Nhập số b: "));
    if (isNaN(a) == true || isNaN(b) == true) {
        alert("Dữ liệu bạn nhập phải là số");
    }
} while (isNaN(a) == true || isNaN(b) == true);
console.log("Tổng 2 số " + a + " + " + b + " là: " + sumNumber(a, b));


//2:Hàm không có return
function sum_Number() {
    do {
        var x = parseInt(prompt("Nhập số x: "));
        var y = parseInt(prompt("Nhập số y: "));
        if (isNaN(x) == true || isNaN(y) == true) {
            alert("Dữ liệu bạn nhập phải là số");
        }
    } while (isNaN(x) == true || isNaN(y) == true);

    var z = x + y;
    console.log("Tổng hai số: " + x + " + " + y + " là:" + z);
}
sum_Number();


//Tính tổng các số lẻ trong mảng
//1:Hàm không có return
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function numberOdd() {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            sum += number[i];
        }
    }
    console.log(sum);
}
numberOdd();


//2:Hàm có return
function number_Odd(number) {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            sum += number[i];
        }
    }
    return sum;
}
console.log("Tống số lẻ trong mạng là: " + number_Odd(number));

function myFunction(message) {
    return message;
}
console.log(myFunction('khanh'));