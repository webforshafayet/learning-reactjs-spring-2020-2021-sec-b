"use strict"

//a   =10
//var b=20;////////////for using use strict it will cause error....let const must declare

let c=30;
const d=40;

console.log('helllo nodejs.....'+d);
console.log(`helllo nodejs.....${d == '40' ? true : false }..`); // true
console.log(`helllo nodejs.....${d == '30' ? true : false }..`); // false
console.log(`helllo nodejs.....${d === '40' ? true : false }..`); // false



let f1= function(){
    return 10+30;
}
console.log(f1()); // 40



let f2 = a=> a+50;
console.log(f2(12)); // 62

let f3 = (a,b)=> a+b;
console.log(f3(12,40));  // 52




function sum(f4){  //call back function
	return f4();
}

console.log(sum(function(){  //call back function
	return 30+30;
}));