//date
let date=new Date();
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toISOString());
 console.log(date.toUTCString());
 console.log(typeof date);
 let currentdate=new Date(2024,1,2);
 console.log(currentdate.toDateString());
 
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(new Date(myTimeStamp));
console.log(Math.floor(Date.now()/1000));



