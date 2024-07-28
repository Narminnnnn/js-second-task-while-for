// 1) for ile quracaginiz task
// *
// **
// ***
// ****
// *****



// for (let i = 1; i <=5; i++){
//     let stars =""
//     for (let j =1; j<=i; j++){
//         stars += "*"
//     }
//     console.log(stars);
// }

// 2) for ile quracaginiz task
// *****
// ****
// ***
// **
// *

// for (let i = 5; i > 0; i--){
//     let stars =""
//     for (let j = 0; j < i; j++){
//         stars += "*"
//     }
//     console.log(stars);
// }

// 3) toplayan bolen vuran  cixan parametrli  js funksiyalarin yaradin

// function toplama(a, b) {
//     console.log((a + b));
// }
// toplama(1, 30)

// toplama (60,20)

// function bolme (a, b) {
//     console.log((a/b));
// }

// bolme(30,5)

// function vurma(a, b) {
//     console.log((a*b));
// }
// vurma(7,8)


// function cixma(a, b) {
//     console.log((a - b));
// }
// cixma(16,17)


// 4. Ədədin faktorialını hesablayan funksiyanı yazın. Funksiya n ədədini götürməli və n deməlidir! Qaytarmalıdır (n faktorial)
//  For və ya while loopundan istifadə edin.


// function faktorialFor(n) {
//     let faktorial = 1;
//     for (let i = 1; i <= n; i++) {
//         faktorial *= i;
//     }
//     return faktorial;
// }
// let n = 3;
// console.log(faktorialFor(n));

// function faktorialWhile(n) {
//     let faktorial =1;
//     let i = 1;
//     while (i<=n) {
//         faktorial *=i;
//         i++;
//       }
//       return faktorial;
// }
// let n = 6;
// console.log(faktorialWhile(n));


// 5) Massivdə ən böyük dəyəri tapan funksiyanı yazın. 
// Funksiya ədədlər massivi götürməli və massivdəki ən böyük ədədi qaytarmalıdır.
//  Bunu for və ya while loopundan istifadə edərək həll edin.


// function findmaxFor(arr){
//     let max = arr[0];
//     for (let i =1; i < arr.length; i++){
//         if(arr[i]> max){
//             max = arr[i];
//         }

//     }
//     return max;

// }
// let number =[1,2,5,100,3,4,250,300]
// console.log(enboyukFor(number));

// function findmaxWhile(arr){
//     let max = arr[0];
//     let i= 1;
//     while (i < arr.length) {
//         if (arr[i]>max){
//             max = arr[i]
//         }
//         i++
//     }
//     return max;
// }
// let number = [7, 9,16,25,3]
// console.log(findmaxWhile(number));

