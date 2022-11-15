//let age = window.prompt("Phần mềm tính tuổi, xin hãy nhập tuổi của bạn: "); //string
//age = Number(age); // type conversion string to number
//age +=1;    // because age is number so we can plus
//alert(`Xin chúc mừng bạn đã ${age} tuổi rồi!!!`); // age + 1

// Callback

// function getImg(url, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//     };
//     xmlHttp.open("GET", url, true);
//     xmlHttp.send(null);
// }

// getImg('https://picsum.photos/200/300', (data) => {
//     // console.log(data);
//     document.getElementById('img_1').setAttribute('src', data.responseURL)
//     getImg('https://picsum.photos/200/300', (data) => {
//         document.getElementById('img_2').setAttribute('src', data.responseURL);
//         getImg('https://picsum.photos/200/300', (data) => {
//             document.getElementById('img_3').setAttribute('src', data.responseURL);
//         });
//     });
// });

// Promises

//vi du co ban///////////////////////////////////////////////////////

// const testPromises = new Promise((resolve, reject) => {
//     let condition = false //true-success / false-error

//     if (condition) {
//         setTimeout(() => {
//             resolve('Success')
//         }, 3000);
//     } else {
//         reject('Error')
//     }
// });

// testPromises.then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

/////////////////////////////////////////////////////////////////////

// function getImg(url, resolve) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
//     };
//     xmlHttp.open("GET", url, true);
//     xmlHttp.send(null);
// }

// const testPromises1 = new Promise((resolve) => {
//     getImg('https://picsum.photos/200/300', resolve)
// });

// const testPromises2 = new Promise((resolve) => {
//     getImg('https://picsum.photos/200/300', resolve)
// });

// const testPromises3 = new Promise((resolve) => {
//     getImg('https://picsum.photos/200/300', resolve)
// });

// testPromises1
//     .then((data) => {
//         document.getElementById('img_1').setAttribute('src', data.responseURL);
//         return testPromises2;
//     })
//     .then((data) => {
//         document.getElementById('img_2').setAttribute('src', data.responseURL);
//         return testPromises3;
//     }).then((data) => {
//         document.getElementById('img_3').setAttribute('src', data.responseURL);
//     })
//     .catch(err => {
//         console.log(err);
//     });

/////////////////////////////////////////////////////////////////////////////////////////////////

// function getImg(url, resolve) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
//     };
//     xmlHttp.open("GET", url, true);
//     xmlHttp.send(null);
// }

// const testPromises1 = new Promise((resolve, reject) => {
//     getImg('https://picsum.photos/200/300', resolve)
// });

// const testPromises2 = new Promise((resolve, reject) => {
//     getImg('https://picsum.photos/200/300', resolve)
// });

// const testPromises3 = new Promise((resolve, reject) => {
//     getImg('https://picsum.photos/200/300', resolve)
// });

// const excuteAsync = async () => {
//     try {
//         const x = await testPromises1;
//         document.getElementById('img_1').setAttribute('src', x.responseURL);
//         const x1 = await testPromises2;
//         document.getElementById('img_2').setAttribute('src', x1.responseURL);
//         const x2 = await testPromises3;
//         document.getElementById('img_3').setAttribute('src', x2.responseURL);
//     } catch (err) {
//         console.log(err);
//     }

// }
// excuteAsync();

//////////////////////////Array/////////////////////////////////////////////////////////////////////

// const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c)

// //Creating an Array
// const cars = [
//     "Volvo",
//     "Merc",
//     "Toyota"
// ];
// const xes = new Array("xe oto", "xe tank"); //Using the JavaScript Keyword new -- ["xe oto", "xe tank"]
// console.log(xes[0]); //Accessing Array Elements
// xes[0] = "xe may" // Changing an Array Element
// console.log(xes); // ["xe may", "xe tank"

// //Array
// const person = ["Duy", "Bui", 21];
// console.log(person[0]); // person[0] = "Duy"
// //Object
// const member = {
//     firstName: "Duy",
//     lastName: "Bui",
//     age: 21
// };
// console.log(member.firstName); // member.firstName = "Duy"

// const cars = ["Volvo", "Merc", "Toyota"];
// let do_dai = cars[cars.length - 1];
// console.log(do_dai); // toyota

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]

// fruits.sort();
// console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange']

// fruits.reverse();
// console.log(fruits); // ['Orange', 'Mango', 'Banana', 'Apple']
try {
    const list = [40, 100, 1, 5, 25, 10, 35];
    list = [1, 2, 3, 4, 5, 6, 7]
    console.log(list);
} catch (err) {
    console.log(err);
};