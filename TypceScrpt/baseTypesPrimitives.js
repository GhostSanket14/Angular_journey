var age;
var names;
var happy;
age = 24;
names = 'Sanket';
happy = true;
console.log(age);
console.log(names);
console.log(happy);
// We can use let inside a function but not in class. As JS use let for local scope and not for property in class.
var sanket = /** @class */ (function () {
    function sanket() {
    }
    sanket.prototype.sankettt = function () {
        var a;
    };
    return sanket;
}());
