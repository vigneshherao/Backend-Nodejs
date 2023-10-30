// let a = 10;
// let b = 5;


// console.log(a+b);


console.log(process.argv);

let args = process.argv;
for(let i = 2;i<=args.length;i++){
    console.log(`value is ${i} and ${args[i]}`)
}