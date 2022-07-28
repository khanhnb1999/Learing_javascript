// Check for positive Integer
// Hàm Number.isInteger kiểm tra nó có phải là số hay không
// Cách1:
function check_number(value) {
    return (Number.isInteger(value) && value > 0);
}

console.log(check_number(2));//true (là số nguyên dương)
console.log(check_number(-4)); //false (Không phải là số nguyên dương)

// Cách2:
let check_number1 = (value) => {
    return (typeof value == 'number' && value > 0 && value % 1 == 0);
}

console.log(check_number1(23))//true
console.log(check_number1(-13))//false

// Sử dụng input để tính tổng 2 số
//Number() chuyển đổi giá trị thành 1 số
// parseInt dùng để chuyển đổi giá trị từ chuỗi về 1 số nguyên
function Sum() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    // Kiểm tra dữ liệu không được để trống
    if (a == "" && b == "") {
        alert("Bạn không được để trống");
        return false;
    };

    a = number(a);
    b = number(b);

    if ((isNaN(a) == true) || (isNaN(b) == true)) {
        alert("Bạn phải nhập kí tự là số");
    }
    let Sum = parseInt(a) + b;
    let Result = document.getElementById('result');
    Result.innerHTML = Sum;
    Result.style.color = 'red';
}

// Tính tổng 2 số theo object opp
let list_number = {
    number1: 12,
    number2: 23
}

let sumNumber = list_number.number1 + list_number.number2;
console.log(sumNumber);

// Dùng vòng lặp tính tổng các phần tử trong mảng

function sumArray(arrayNumber) {
    let sum = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        sum += arrayNumber[i];
    }
    return sum;
}

let arrayNumber = [1, 2, 3, 4, 5, 6];
console.log("Tổng các phần tử trong mảng: " + sumArray(arrayNumber));

// Dùng foreach

function sumArray1(arrayNumber1) {
    let sum = 0;
    arrayNumber1.forEach(function (value) {
        sum += value;
    })
    return sum;
}
let arrayNumber1 = [1, 2, 3, 14, 25, 3];

console.log("Tổng các phần tử trong mảng bằng vòng lặp forech: " + sumArray1(arrayNumber1));

// Dùng hàm map,reduce,reduceRight
function sumArray2(arrayNumber2) {
    let sum = 0;
    arrayNumber2.map(function (value) {
        sum += value;
    })
    return sum;
}
let arrayNumber2 = [1, 2, 3, 14, 25, 3];

console.log("Tổng các phần tử trong mảng bằng vòng lặp forech: " + sumArray2(arrayNumber2));