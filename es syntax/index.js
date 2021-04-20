"use strict"

// single array all element concate in string
let students = ['shafayet', 'abir', 'arif', 'rakib', 'razib']; // single array all element concate in string
console.log(students);
let newstring = students.join('-');
console.log(newstring);
 


// studentss + pqr + xyz + abc + aaa 
let studentss = ['shafayet', 'abir', 'arif', 'rakib', 'razib'];
let xyz = ['xyz', 'abc'];
let newarray = [...studentss, 'pqr', ...xyz, 'aaa']; // studentss + pqr + xyz + abc + aaa 
console.log(newarray);



// every student entity concate with ABC
let newarray_map = students.map((value)=>{
	return value + 'ABC';
});
console.log(newarray_map);



//filter
// its kind of search --- array all element 2nd element check if = 'b'.then it will show output
let newarray_filter = students.filter((value)=>{
	return value[1] == 'b';
});
console.log(newarray_filter);


// output just name of the student array
const student = {
	name: 'shafayet',
	id: 12,
	dept: 'CS',
	getName: function(){
		return this.name;
	}
}
console.log(student.name);



// output== 1.1
const student2 = {
	name: 'alamin',
	id: 12,
	dept: 'CS',
	getName: function(){
		return this.name;
	},
	getObj: function(){
		return {
			version: 1.1,
			getVersion: function(){
				return this.version;
			}
		}
	}
};
console.log(student2['getObj']().getVersion());



//filter all cse output line
							// [
							// 	{ id: 3, name: 'abc', dept: 'CSE' },
	//output			    // 	{ id: 4, name: 'pqr', dept: 'CSE' },
							// 	{ id: 5, name: 'pqr', dept: 'CSE' }
							//   ]
let students2 = [
	{id:1, name: 'alamin', dept: 'CS'},
	{id:2, name: 'xyz', dept: 'CIS'},
	{id:3, name: 'abc', dept: 'CSE'},
	{id:4, name: 'pqr', dept: 'CSE'},
	{id:5, name: 'pqr', dept: 'CSE'}
];
const newarray2 = students2.filter(std=>std.dept == 'CSE');
console.log(newarray2);


// reduce 1st student name
				// let students2 = [
				// 	{id:1, name: 'alamin', dept: 'CS'},
				// 	{id:2, name: 'xyz', dept: 'CIS'},
			//75-81 line repeat	// 	{id:3, name: 'abc', dept: 'CSE'},
				// 	{id:4, name: 'pqr', dept: 'CSE'},
				// 	{id:5, name: 'pqr', dept: 'CSE'}
				// ];
let id	= [34,57,354,24, 55];

const mytotal3 = students2.reduce(function(total, std){
	total.id += std.id;
	console.log(std);
	return total;      //{ id: 2, name: 'xyz', dept: 'CIS' }
					  // { id: 3, name: 'abc', dept: 'CSE' }
	//	output			// { id: 4, name: 'pqr', dept: 'CSE' }
					  // { id: 5, name: 'pqr', dept: 'CSE' }
});
console.log(mytotal3.id);  // output 15....all student id addition

// console.log(student['getObj']().getVersion());

 // destructure array
 const student3 = {
	name: 'alamin',
	id: 12,
	dept: "CSE"
};
let myname = student3.name;
let id_d = student3.name;
let dept = student3.depnamet;
const {name:myname_d, id_DD, dept_d} = student3;
console.log(myname); // output---> alamin
 
// time out

// setTimeout(function(){
// 	console.log('3s call');
// }, 3000);
// setTimeout(function(){
// 	console.log('2s call');
// }, 2000);
// setTimeout(function(){
// 	console.log('1s call');
// }, 1000);
// console.log('0 call');


//callback



//promise 
let p = new Promise((resolve, reject)=>{
	let sum = 2+3;
	if(sum == 5)
	{
		setTimeout(()=>{
			resolve('success');
		}, 3000);
	}else{
		reject('error');
	}
});
p.then((msg)=>{
	console.log(msg);
}).catch((error)=>{
	console.log(error);
});


//asynchronous+await

// function processmytask(sum){
// 	return new Promise((resolve, reject)=>{
// 		if(sum == 5)
// 		{
// 			setTimeout(()=>{
// 				resolve('success');
// 			}, 3000);
// 		}else{
// 			reject('error');
// 		}
// 	});
// }
// async function testAsyncTask(val){
// 	console.log('async process calling');
// 	try{
// 		const response  = await processmytask(val);
// 		console.log(response);
// 	}catch(error){
// 		console.log(error);
// 	}
// }
// testAsyncTask(5);


// const f1 = (a, b, callback) =>{
// 	setTimeout(()=>{
// 		let sum = a+b;
// 		callback(sum);
// 	}, 3000);
// }
// const f2 = function(f1){
// 	f1(3,5, function(result){
// 		console.log(`Result: ${result}`);
// 	});
// }
// f2(f1);
// console.log('this is another task!');



/// Asinck+ promise
function sum(a, b){
	return new Promise((resolve, reject)=> {
		if(a+b == 50){
			setTimeout(()=>{
				resolve('success');
			}, 3000);
		}else{
			reject('error');
		}
	});
}
sum(40,10).then(msg=>{
	console.log(msg);
}).catch(error=>{
	console.log(error);
})
//sum(40, 10).then(
//	(msg)=>{console.log(resolve)}, 
//	(error)=>{console.log(reject)}
//);
console.log('this is another task2...');




/// Asinck+ await
function sum(a, b){
	return new Promise((resolve, reject)=> {
		if(a+b == 50){
			setTimeout(()=>{
				resolve('success');
			}, 3000);
		}else{
			reject('error');
		}
	});
}
async function getMytaskDone(){
	console.log('this is another task');
	let response = await sum(20,30);
	console.log(response);
}
getMytaskDone();
console.log('outside get task done');



//default parameter constructor

class Student{

	constructor(name, id, email=''){
		this.name = name;
		this.id = id;
		this.email = email;
	}

	getName(){
		return this.name;
	}
}


const s1 = new Student('alamin', '12');
console.log(s1.getName());