/*
1. DOM Node - document.createElement()
2. DOM Node - document.createTextNode()
3. DOM Node - các phương thức khác
   +Phương thức appendChild()
   +Phương thức insertBefore()
   +Phương thức removeChild()
   +Phương thức replaceChild()
*/

/*
1.DOM Node - document.createElement()
*/

// // Đưa vào thẻ body
// var h1 = document.createElement('h1');
// h1.innerHTML = "Sử dung phương thức createElement() đưa vào thẻ body";
// // dùng DOM element getElementsByTagName
// // document.getElementsByTagName('body')[0].appendChild(h1);

// // Đưa vào thẻ h2
// var h2 = document.createElement('h2');
// h2.innerHTML = "Sử dung phương thức createElement() đưa vào thẻ h2";
// document.getElementsByTagName('h2')[0].appendChild(h2);

// // Đưa vào class container
// var h3 = document.createElement('h3');
// h3.innerHTML = "Sử dung phương thức createElement() đưa vào class container";
// // Dùng DOM element getElementsByClassName
// document.getElementsByClassName('container')[0].appendChild(h3);


// /*
// 2. DOM Node - document.createTextNode()
// */
// //Đưa vào thẻ h4
// var h4 = document.createElement('h4');
// var text = document.createTextNode('Tôi đang sử dụng document.createTextNode() đưa vào thẻ h4');
// // h4.appendChild(text);
// document.getElementsByTagName('h4')[0].appendChild(text);


/*
3. DOM Node - các phương thức khác
   +Phương thức appendChild()
   +Phương thức insertBefore()
   +Phương thức removeChild()
   +Phương thức replaceChild()
*/

/*
3.1: Phương thức appendChild();
  -Dùng để thêm vào vị trí cuối cùng của đối tượng thẻ HTML nào đó.
*/

// var button = document.getElementById('append-child');
// // var text = document.getElementById('demo');

// button.addEventListener('click', function () {
//    var h4 = document.createElement('h4');
//    h4.innerHTML = "Tôi đang học javascript";
//    document.getElementById('demo').appendChild(h4);
// });

/*
 +Phương thức insertBefore()
 -Được dùng để thêm 1 Node vào đằng trước 1 node con nào đó
*/

// var button = document.getElementById('btn-content');


// var button = document.getElementById('btn-button');
// var element = document.getElementById('content');

// button.addEventListener('click', function () {
//    var text_content = document.createElement('h2');
//    text_content.innerHTML = "Đúng!!! Tôi đang học javascript";

//    var element_child = document.getElementsByTagName('h3')[1];

//    element.insertBefore(text_content, element_child);
// });



var button = document.getElementById('btn-button');
var remove_content = document.getElementById('demo');

button.addEventListener('click', function () {
   var element_remove = document.getElementsByTagName('h3')[0];

   remove_content.removeChild(element_remove);
});