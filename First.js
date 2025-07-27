//We can declare a variable in following ways
// Name = "Faizan";
// var money = 1000;//can be redeclared and udated.Is not preferred.
// let age = 19;//can't be redeclared but udated
// const PI = 3.14159;//can neither be redeclared nor udated
// num = BigInt("12345678");
// sym = Symbol("Apple");
// //Declaring object,we can change the keys of object even though it is constant.
// const Student = {
//       fullName : "Faizan Fayaz",
//       Age : 19,
//       cgpa : 9.9
// };
// console.log(Student);
// console.log(Student.fullName);
// console.log(Student["Age"]);
// // in js '==' is used to compare if we don't consider data type as it evaluate 2=="2" as true.So we use '===' it checks data type also.
// let myage=19;
// let result=myage>18?"Adult":"Not Adult";//Ternary operator.
// console.log(result);
// alert("Hello");
// let num=prompt("Enter the Number : ");
// if(num%9===0){
//       console.log(num," is a multiple of 9");
// }else{
//       console.log(num," is not a multiple of 9");
// }
// for-of loop:used for string and araay.
let str="JavaScript";
 for(let i of str){
      console.log(i);
}
//for-in loop used for objects and arrays and returns key.
const Student ={
       name : "Faizan",
       Age : 19,
       isPass : true
};
 for(let key in Student){
       console.log(key," : ",Student[key])
 }   
 //Template Literals :
 let special=`this is a Template Literal ${1+2+3+4+5}`;
 console.log(special);  