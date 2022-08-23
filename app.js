
'use strict'
// =====1-misol=====
// let n =10;
// let arr =[]; //[1,2,8,16,32,64,128]
// for(let i = 0; i<= n; i++){
//     arr[i]=i;
// }

// console.log(arr)

//======2-misol=======
// let n =10;
// let arr =[];//[1,2,8,16,32,64,128]

// for(let i = 0; i<= n; i++){
// arr[i] =math.pow(2 ,i);
// }
// console.log(arr)

//=======3-misol=======
// let n =10;
// let arr = [];
// let sum = 0

// for(let i =0; i<= n; i++){
//     sum += i
// }

// arr.push(sum)
// console.log(arr)
//======4-misol=======

// let arr = [0,10,20,30,40,50,60]
// let sum =0;
// //0 1 2 3 4 5 6
// //22 -5 -5
// for(let i = 0; i <= arr.length; i++){
//     i % 2 == 0 ? console.log(sum -= arr[i]):console.log()

// }

//======5-misol=======
// let n = 6;

// let arr =[]
// let sum = 0;

// for(let i = 0; i <= n; i++){
//     let pr = +prompt(son kiriting ${i})
//     arr[i] =pr;
// }
//  for(let j = 0; j < arr.length; j++){
//     sum += arr[j];

//  }
// console.log(arr)
// console.log(sum)
//======6-misol=======
// let n =6;

// let arr = []; //[0, 1, 2 ,3 ,4 ,5 ,6]

// for(let i = 0; i<= n; i++){
//     arr[i] =i;
// }
// arr.reverse() //[6 ,5 ,4 ,3 ,2 , 1]
// console.log(arr)
    
//======8-misol=======
// let arr =[2,4,56,89,10,23,46,35];

// let n1 =2;
// let n2 =4;
// let sum =0; //56 + 89+10==155

// for(let j =n1; j <=n2; j++){
//     sum += arr[j]
// }
// console.log(sum)//155

// let arr = [2,4,56,10,23,45,69];
// let sum =0;

// for(let i = 0; i < arr.length ;i++){
//     i % 2 == 1 ? sum+= arr[i]: console.log()
// }
// console.log(sum)

//======8-misol toq indexlarni qiymatin yig'uvchi

// let arr = [2,4,56,10,23,45,69];
// let sum =0;

// for(let i = 0; i < arr.length ;i++){
//     i % 2 == 1 ? sum+= arr[i]: console.log()
// }
// console.log(sum)

//=====9-misol=======
// let n =6;
// let sum = 0;

// for(let i =0; i <= n; i++){
//     if(i % 2== 0){
//         sum =i 
//     }
// }
// console.log(sum)

//=====10-misol=======
// let n =6;
// let sum =0

// for(let i =n; i>= 0; i++) {
//     if(i % 2== 0){
//         sum = i
//     }
// }
// console.log(sum)

// ======11-misol=======
// let n = 8;
// let sum = 0;
// for (let i = 0; i <= n; i++){
//     if (i % 2 == 1) {
//         sum = i
//     }
// }
// console.log(sum);


// ======12-misol=======
// let arr = [2,4,56,89,10,23,45,69];
// let sum = 0;
// let arrLength = arr.length;
// for (let i = 0; i < arr.length; i++){
//     (sum += arr[i]) / arrLength
// }
// console.log(sum / arrLength);
//======13-misol=======

// ======15-misol=======
// let arr = [2, 12, 34, 23, 4, 5, 78];
// let arrToq = [];
// for (let i = 0; i < arr.length; i++){
//     if (i % 2 == 0) {
//         continue
//     }
//     arrToq.push(arr[i])
// }
// console.log(arrToq);


// ======17-misol==bir birig aoxshashlarini olib beruvchi dastur
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 3];
// function findSameNumber(arr1, arr2) {
//     for (let i of arr1) {
//         for (let j of arr2) {
//             i == j ?console.log(i) : console.log();;
//         }
//     }
// }
// findSameNumber(arr1,arr2)


// ======18-misol=======
// let n = 9;
// let arr = [];
// for (let i = 0; i <= n; i++){
//     let prompt = +prompt(son kiriting ${i});
//     arr[i] = prompt;
// }
// console.log(arr);

// ======19-misol=======
// let n = 6;
// let arr = [];
// let sum = 0;
// for (let i = 0; i <= n; i++){
//     let pr = +prompt(son kiriting ${i})
//     arr[i] = pr;
// }
// for (let j = 0; j < arr.length; j++){
//     sum += arr[j];
// }
// console.log(arr);
// console.log(sum);

//======20-misol=======

// let n = 6;
// let arr = [];
// for (let i = 0; i <= n; i++){
//     let pr = +prompt(son kiriting ${i} )
//     arr[i] = pr;
// }
// let isOdd0reEvenNumber = prompt(Enter Toq or Juft !!!)
// function isOdd() {
//     for (let i = 0; i < arr.length; i++){
//         arr[i] % 2 == 1 ? console.log(arr[i] ) : [];
//     }
// } function isEven() {
//     for (let i = 0; i < arr.length; i++){
//         arr[i] %2 ==0 ? console.log(arr[i]) : [];
//     }
// }
// if (isOdd0reEvenNumber == 'toq') {
//     isOdd()
// } else if (isOdd0reEvenNumber == 'juft') {
//     isEven()
// } else {
//     console.log('Error');
// }


//======21-misol=======

// let arr = [2, 3, 4, 5, 78, 45, 23, 2];
// function findLestElement() {
//     console.log(arr[arr.length - 1]);
// }
// findLestElement()


//=====22-misol=======

// const arr = [1, 2, 2, 3, 4, 2, 43];
// const toFindDublicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
// const dublicateElements = toFindDublicates(arr);
// console.log(dublicateElements);
