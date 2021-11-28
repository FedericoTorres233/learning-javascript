// Variables:

let name = "Fede";
let age = 30;

// Object:

let person = {
    name: "Fede",
    age: 30
};

console.log(person);

// Dot Notation
person.name = "Federico";
console.log(person.name);

// Bracket Notation
person["name"] = "Federico";
console.log(person["name"]);


let selection = "age";
person[selection] = 50;

console.log(person.age);



var person1 = {
    fede: {
        o: "XD"
    }
}
console.log(person1.fede);
console.log(person1.fede.o);