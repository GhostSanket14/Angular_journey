function insertAtEnd<T>(myArr: T[], valueToInsert: T) {
    const newArray=[...myArr, valueToInsert];
    return newArray;
}

// This type is what infered by array, hence allowing us to make generic functions
let numArr=[1,2,3];
let num=4;
let strArr = ['A','B','C'];
let str='D';

console.log(insertAtEnd(numArr,num));
console.log(insertAtEnd(strArr, str));