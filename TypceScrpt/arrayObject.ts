let guns: string[]; // Creating array.
guns=["AK47","SIG716"];
console.log(...guns);

// Creating objects.
let player: {
    name:string;
    age:number;
};

player= {
name:"sanket",
age:24
};

// Creating array of objects.
let ages:{
ids: number,
name: string
} [] = [];  // Initilize the array before using it. Or it will give error.

ages.push({
    ids: 24,
    name: "sanket"
});

ages.forEach(age => {
    console.log("Id "+age.ids);
    console.log("Name " +age.name);
});


// Union types
let paisa: string | number = "Hundred";
console.log(paisa);
paisa = 100;
// paisa = true;   ERROR
console.log(paisa);