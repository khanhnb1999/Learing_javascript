//1:Vòng lặp for
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// var i = 0 (Khởi tạo biến bắt đầu)
// i< 10 (Điểu kiện dừng vòng lặp)
//i++ (Bước nhảy)


// For/in loop
var userName = {
    name: 'binh khanh',
    age: 20,
    address: 'nghe an'
}

//Lấy thuộc tính của object
for (var key in userName) {
    console.log(key);
}
//Lấy giá trị của object
for (var key in userName) {
    console.log(userName[key]);// [key lấy giá trị của object]
}

// Tạo 1 mảng rồi dùng for/in
var car = ['toyota', 'honda', 'wave'];
for (var key in car) {
    console.log(key);
}
//Lấy giá trị trong mảng thông qua for/in
for (var key in car) {
    console.log(car[key]);
}


// For/of loop
var list_name = ['javascript', 'php', 'html'];
for (var value of list_name) {
    console.log(value);//Lấy từng giá trị trong mảng
}


//Vòng lặp while-do while
while (condition) {
    //cod thực thi
}
//condition điều kiện để dùng vòng lặp
var i = 0;
while (i < 10) {
    console.log(i);
    i++;//Nếu không tăng i thì vòng lặp sẽ vô hạn

}

//Vòng lặp do-while
var n = 0;
do {
    console.log(n);
    n++;
}
while (n < 8);

//Exercise1:Vòng lặp for
function testNumber() {
    var messageError = document.getElementById('message');
    var numberValue = document.getElementById('number').value;

    if (isNaN(numberValue) == true) {
        messageError.innerHTML = "Bạn phải nhập ký tự là số";
        messageError.style.color = "red";
    }
    else {
        var html = '';
        for (var i = 0; i < numberValue; i++) {
            html += i + "<br>";
        }
        document.getElementById('result').innerHTML = html;
    }
}
