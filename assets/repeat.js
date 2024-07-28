// 1) for ile quracaginiz task
// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
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

// for (let i = 5; i > 0; i--) {
//     let stars = "";
//     for (let j = 0; j < i; j++) {
//         stars += "*"
//     }
//     console.log(stars);
// }



// Recursive function oz ozunu cagiran funksiya

// function factorial (n) {
//     if (n <= 1) {
//       return 1;
        
//     } else { 
//         return (n * factorial (n-1));
//     }
    
// }
// console.log( factorial (5));

// generator function

// function* generationexample() {
//     console.log( "1ci hisse islendi");
//     yield 1; 
//     console.log( "2ci hisse islendi");
//     yield  2 ; 
//     console.log( "3ci hisse islendi");
//     yield 3; 
// }

// console.log(resault.next().value);



// callback function 
// function topla(a,b) {
//     return a+b
    
// }
// function vurma (a,b) {
//     return a*b
    
// }
// console.log( vurma (topla (1,1), 2 ));

//  eyni funksiya daxilinde toplama, cixma, vurma, bolme emellerinin aparilmasi callbackle aparilir.
// function calculator (a,b) {
//     console.log("a+b=", topla (a,b));
//     console.log("a-b=", cix (a,b));
//     console.log("a*b=", vur (a,b));
//     console.log("a/b=", bol (a,b));
// }
// function topla (a,b) {
//     return a+b
// }
// function cix (a,b) {
//     return a-b
// }
// function vur (a,b) {
//     return a*b
// }
// function bol (a,b) {
//     return a/b
// }
// calculator (3,6)

// 4. Ədədin faktorialını hesablayan funksiyanı yazın. Funksiya n ədədini götürməli və n deməlidir! Qaytarmalıdır (n faktorial)
//  For və ya while loopundan istifadə edin.


// function faktorialFor(n) {
//     let faktorial = 1;
//     for(let i = 1; i <= n; i++){
//         faktorial *= i;
//     }
//     return faktorial;
    
// }
// let n = 6;
// console.log(faktorialFor(n));

// function faktorialWhile(n) {
//     let faktorial = 1;
//     let i = 1;
//     while (i <= n) {
//         faktorial *=i;
//         i++
        
//     }
//     return faktorial;
// }
// let n = 7;
// console.log(faktorialWhile(n));


// let obj = [
//     {
//         name: "Ali",
//         surname: "Aliyev",
//         age: 10,
//         driving: true
//     }, {
//         name: "Veli",
//         surname: "Aliyev",
//         age: 17,
//         driving: false,
//     }, {
//         name: "Mehman",
//         surname: "Aliyev",
//         age: 25,
//         driving: true,
//     },{
//         name: "Nicat",
//         surname: "Aliyev",
//         age:26,
//         driving: false
//     },{
//         name: "Ayxan",
//         surname: "Aliyev",
//         age:15,
//         driving: true
//     }
// ]

// let drivingandadult = []
// for (let i = 0; i < obj.length; i++) {
//     const element = array[i];
    
// }

// function findmaxFor(arr) {
//     let max = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
            
//         }
        
//     }
//     return max;
// }
// let number =[290,50, 4,6,98]
// console.log(findmaxFor(number));


// function findmaxWhile (arr){
//     let max = arr[0];
//     let i = 1;
//     while (i < arr.length) {
//         if (arr[i]>max) {
//             max = arr[i];
            
//         }
//         i++;
//     }
//     return max;
// }
// let number= [5,37,8,9,24]
// console.log(findmaxWhile(number));



// for (let i = 1; i <= 5; i++) {
//     let stars ="";
//     for( let j=1; j<=i; j++){
//         stars+="*";
//     }
//     console.log(stars);
// }

// for (let i = 5; i >0; i--) {
//     let stars = "";
//     for (let j = 0; j<i; j++){
//         stars+="*"
//     }
//     console.log(stars);
// }