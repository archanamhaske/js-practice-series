"use strict"
// alert(3+3); we are using node js not browser
console.log(3+3);
console.log("archana");


let name='archana';
let age=18;
let isLoggedIn=false;

//data types 
//number
//bigint
//string
//null
//undefine
//symbol
//object

console.log(typeof age);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof 18);

//1. Number //The Number data type in JavaScript includes both integers and floating-point numbers. Special values like Infinity, -Infinity, and NaN represent infinite values and computational errors, respectively.
let a=3;
let b=3.5;
let c='someting is here'/2;
let d='';
let e= Infinity;
console.table([a,b,c,d,e]);

//2. string:
let a1="archana";
let a2='Mhaske';
let s='Archana Ashok Mhaske';
let a3=`this is my full name ${s}`;
console.table([a1,a2,a3]);

// 3. Boolean here there are two values only true or flase 
let b1=false;
let b2=true;
console.table([b1,b2]);

//4. Null 5. Undefined 
let c2=null
let c1 
let c3='';
console.table([c1,c2,c3]);
//6. Symbol (Introduced in ES6)
let s1= Symbol("Archana");
let s2= Symbol("Mhaske");
console.log(s1==s2);
console.log(s1===s2);
