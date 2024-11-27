var guns; // Creating array.
guns = ["AK47", "SIG716"];
console.log.apply(console, guns);
// Creating objects.
var player;
player = {
    name: "sanket",
    age: 24
};
// Creating array of objects.
var ages = []; // Initilize the array before using it. Or it will give error.
ages.push({
    ids: 24,
    name: "sanket"
});
ages.forEach(function (age) {
    console.log("Id " + age.ids);
    console.log("Name " + age.name);
});
// Union types
var paisa = "Hundred";
console.log(paisa);
paisa = 100;
// paisa = true;   ERROR
console.log(paisa);
