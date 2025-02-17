const myName='archana';
const myRepoCount=30;
// console.log(`Hello my name is ${myName} and my repo count is ${myRepoCount}`);

const gameName= new String('archana AShoke Mhaske');
// console.log(gameName[0]);//a
// console.log(gameName.__proto__);//{}
// console.log(gameName.length);//7
// console.log(gameName.charAt(0));//a
// console.log(gameName.charAt(1));//R
// console.log(gameName.charAt(2));//c
// console.log(gameName.indexOf('a'));//0
// console.log(gameName.charAt(gameName.length-1));//a
// console.log(gameName.substring(0,4));//arch
// console.log(gameName.slice(0,4));
const  substringData=gameName.substring(-2,4);//archa
//  console.log(substringData);
 const  slicestringData=gameName.slice(-5,3);//c
//  console.log(slicestringData);
 const  slicestringData1=gameName.slice(0,3);//arc
//  console.log(slicestringData1);

//trim
const newStringData='   archana                        ';
// console.log(newStringData);//      archana
// console.log(newStringData.length);//34
const trimNewStringData=newStringData.trim();//trim is used to remove the unwanted space .
// console.log(trimNewStringData);//archana 
// console.log(trimNewStringData.length);//7
const url="www.archana.com/HOME MHASKE";
// console.log(url);//www.archana.com
const urlStringChange=url.replace("HOME","HOME MHASKE");
// console.log(urlStringChange);//www.archana.com/HOME-MHASKE

const toUppercase=new String('archana');
const toLowercase=new String('ARCHANA');
// console.log(toUppercase.toUpperCase());
// console.log(toLowercase.toLowerCase());
// console.log(gameName.split(''));
// console.log(gameName.split('-'));
// console.log(gameName.split('_'));


// Import the moment library
const moment = require('moment');

// Calculate the start and end of the last 7 days in epoch time (ending with yesterday) in UTC
const lastWeekEnd = moment.utc().subtract(2, 'day').endOf('day').toDate();  // 3 days ago (in UTC)
const lastWeekStart = moment.utc(lastWeekEnd).subtract(7, 'days').startOf('day').toDate();  // 7 days ago from the end of last week (in UTC)

// Ensure the times are set correctly
const lastWeekStartTime = moment.utc(lastWeekStart).startOf('day').unix();  // Set to 00:00:00 UTC
const lastWeekEndTime = moment.utc(lastWeekEnd).endOf('day').unix();  // Set to 23:59:59 UTC

// Log the calculated epoch times
console.log("lastWeekStartTime", lastWeekStartTime);
console.log("lastWeekEndTime", lastWeekEndTime);

