console.log("================ Variables =================");
// let and const are used to declare variables

let fname="John"; // let allows you to change the value of the variable later
const age=30; // const is used to declare a constant variable, which cannot be changed later
console.log(fname);
console.log(age);
// var is an older way to declare variables, and it has function scope
var lname="Doe"; // var allows you to change the value of the variable later, but it has function scope
console.log(lname);
// var is not recommended to use in modern JavaScript, use let and const instead

console.log("================ Data Types =================");
// JavaScript has 7 data types: string, number, boolean, null, undefined, object, and symbol    
// string: a sequence of characters
let str="Hello World"; // string
console.log(str);

// number: a numeric value
let num=10; // number
console.log(num);

// boolean: a true or false value
let bool=true; // boolean
console.log(bool);

// null: a special value that represents no value
let n=null; // null
console.log(n);

// undefined: a special value that represents an uninitialized variable
let und; // undefined
console.log(und);

// object: a collection of key-value pairs
let obj={name:"John", age:30}; // object
console.log(obj);

// symbol: a unique and immutable value
let sym=Symbol("symbol"); // symbol
console.log(sym);


console.log("================ Operators =================");
// JavaScript has 6 types of operators: arithmetic, assignment, comparison, logical, bitwise, and ternary
// arithmetic operators: +, -, *, /, %, ** (exponentiation)
let a=10;
let b=5;
let c=a+b; // addition
console.log(c);
c=a-b; // subtraction
console.log(c);
c=a*b; // multiplication
console.log(c);
c=a/b; // division
console.log(c);
c=a%b; // modulus
console.log(c);
c=a**b; // exponentiation
console.log(c);
// assignment operators: =, +=, -=, *=, /=, %=, **=
let d=10;
d+=5; // addition assignment
console.log(d);
d-=5; // subtraction assignment
console.log(d);
d*=5; // multiplication assignment
console.log(d);
d/=5; // division assignment
console.log(d);
d%=5; // modulus assignment
console.log(d);
d**=5; // exponentiation assignment
console.log(d);
// comparison operators: ==, ===, !=, !==, >, <, >=, <=
let e=10;
let f=5;
let g=e==f; // equality
console.log(g); 
g=e===f; // strict equality
console.log(g);
g=e!=f; // inequality
console.log(g);
g=e!==f; // strict inequality
console.log(g);
g=e>f; // greater than
console.log(g);
g=e<f; // less than
console.log(g);
g=e>=f; // greater than or equal to
console.log(g);
g=e<=f; // less than or equal to
console.log(g);
// logical operators: &&, ||, !
let h=true;
let i=false;
let j=h&&i; // logical AND
console.log(j);
j=h||i; // logical OR
console.log(j);
j=!h; // logical NOT
console.log(j);
// bitwise operators: &, |, ^, ~, <<, >>
let k=10; // 1010
let l=5; // 0101
let m=k&l; // bitwise AND
console.log(m); // 0000
m=k|l; // bitwise OR
console.log(m); // 1111
m=k^l; // bitwise XOR
console.log(m); // 1111
m=~k; // bitwise NOT
console.log(m); // 0101
m=k<<1; // left shift
console.log(m); // 10100
m=k>>1; // right shift
console.log(m); // 0101
// ternary operator: condition ? expr1 : expr2
let n1=10;
let o=5;
let p=n1>o ? "n is greater than o" : "o is greater than n"; // ternary operator
console.log(p); // n is greater than o
console.log("================ Control Flow =================");
// JavaScript has 3 types of control flow: conditional statements, loops, and functions
// conditional statements: if, else if, else, switch
let q=10;
let r=5;
if(q>r){ // if statement
    console.log("q is greater than r");
}
else if(q<r){ // else if statement
    console.log("r is greater than q");
}
else{ // else statement
    console.log("q is equal to r");
}
// switch statement
let s=1;
switch(s){ // switch statement
    case 1: // case 1
        console.log("s is 1");
        break; // break statement
    case 2: // case 2
        console.log("s is 2");
        break; // break statement
    default: // default case
        console.log("s is not 1 or 2");
}

// loops: for, while, do while
// for loop
for(let t=0; t<5; t++){ // for loop
    console.log(t); // print t
}
// while loop
let u=0;
while(u<5){ // while loop
    console.log(u); // print u
    u++; // increment u
}
// do while loop
let v=0;
do{ // do while loop
    console.log(v); // print v
    v++; // increment v
}
while(v<5); // while condition

console.log("================ Functions =================");
// JavaScript has 3 types of functions: function declaration, function expression, and arrow function
// function declaration
function add(x, y){ // function declaration
    return x+y; // return statement
}
// function expression
let subtract=function(x, y){ // function expression
    return x-y; // return statement
}
// arrow function
let multiply=(x, y)=>{ // arrow function
    return x*y; // return statement
}

// function call
let sum=add(10, 5); // function call
console.log(sum); // print sum
let difference=subtract(10, 5); // function call
console.log(difference); // print difference
let product=multiply(10, 5); // function call
console.log(product); // print product
// function with default parameters
function divide(x, y=1){ // function with default parameters
    return x/y; // return statement
}
let quotient=divide(10); // function call
console.log(quotient); // print quotient
// function with rest parameters



console.log("================ Arrays =================");
// JavaScript has 2 types of arrays: single-dimensional and multi-dimensional
// single-dimensional array
let arr=[1, 2, 3, 4, 5]; // single-dimensional array
console.log(arr); // print array
// multi-dimensional array
let arr2=[[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // multi-dimensional array
console.log(arr2); // print array
// array methods: push, pop, shift, unshift, splice, slice
// push: add an element to the end of the array
arr.push(6); // push method
console.log(arr); // print array
// pop: remove the last element from the array
arr.pop(); // pop method
console.log(arr); // print array
// shift: remove the first element from the array
arr.shift(); // shift method
console.log(arr); // print array
// unshift: add an element to the beginning of the array
arr.unshift(0); // unshift method
console.log(arr); // print array
// splice: add or remove elements from the array
arr.splice(2, 1, 10); // splice method
console.log(arr); // print array
// slice: create a new array from a portion of the original array
let arr3=arr.slice(1, 3); // slice method
console.log(arr3); // print array
// array destructuring
let [x, y, z]=arr; // array destructuring
console.log(x); // print x
console.log(y); // print y
console.log(z); // print z

console.log("================ Objects =================");
// JavaScript has 2 types of objects: object literals and constructor functions
// object literal
let obj2={name:"John", age:30}; // object literal
console.log(obj2); // print object
// constructor function
function Person(name, age){ // constructor function
    this.name=name; // this keyword
    this.age=age; // this keyword
}
let person=new Person("John", 30); // constructor function
console.log(person); // print object
// object methods: Object.keys, Object.values, Object.entries
// Object.keys: get the keys of an object
let keys=Object.keys(obj2); // Object.keys method
console.log(keys); // print keys
// Object.values: get the values of an object
let values=Object.values(obj2); // Object.values method
console.log(values); // print values
// Object.entries: get the key-value pairs of an object
let entries=Object.entries(obj2); // Object.entries method
console.log(entries); // print entries
// object destructuring
let {name, age1}=obj2; // object destructuring
console.log(name); // print name
console.log(age1); // print age






