// in TS return type is inferred automatically.

function add(num1: number, num2: number){
    return num1+num2;
}

// We can also do it manually, like this. But prefer first method instead.

function sub(num1: number, num2: number): number{
    return num1 + num2;
}