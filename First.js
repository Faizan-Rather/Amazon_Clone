//We can declare a variable in following ways
Name = "Faizan";
var money = 1000;//can be redeclared and udated.Is not preferred.
let age = 19;//can't be redeclared but udated
const PI = 3.14159;//can neither be redeclared nor udated
num = BigInt("12345678");
sym = Symbol("Apple");
//Declaring object,we can change the keys of object even though it is constant.
const Student = {
      fullName : "Faizan Fayaz",
      Age : 19,
      cgpa : 9.9,
};

console.log(Student);
console.log(Student.fullName);
console.log(Student["Age"]);