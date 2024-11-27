
let age: number;
let names: string;
let happy:boolean;
age=24;
names='Sanket';
happy=true;
console.log(age);
console.log(names);
console.log(happy);


// We can use let inside a function but not in class. As JS use let for local scope and not for property in class.
class sanket{
    sankettt(){
        let a: string;
    }
}