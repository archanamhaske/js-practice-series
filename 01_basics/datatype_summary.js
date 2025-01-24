// thre are two types of data types
// 1. primitive data types
// 2. Non-primitive data types

/*
primitive data types
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol
7. bigint
*/
const name="archana";
let name1="archana";
let number=3;
let number1=3.5;
let isLoggedIn=false;
let email=null;
let nothing=undefined;
let idSymbol=Symbol("id");
let bigNumber=100n;
console.table([name,name1,number,number1,isLoggedIn,email,nothing,idSymbol,bigNumber]);
/* Non-primitive data types
1. object
2. array
3. function

*/

//array
const arr=[1,2,3,4,5];
const array1=['archana','mhaske'];
console.table([arr,array1]);

//object
const obj={
    name:"archana",
    age:18,
    email:"archana@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"],
    address:{
        city:"Delhi",
        state:"Delhi",
        pincode:12345
    }
}
console.table([obj]);
//function
function sum(a,b){
    return a*b
}
console.log(sum(2,3));

console.log(typeof arr,"arr");
console.log(typeof(array1),"array");
console.log(typeof name,"name");
console.log(typeof(name1),"name1");
console.log(typeof number1,"number1");
console.log(typeof(isLoggedIn),"isLoggedIn");
console.log(typeof(email)," email");
console.log(typeof(nothing),"nothing");
console.log(typeof(idSymbol),"idSymbol");
console.log(typeof(bigNumber),"bigNumber");