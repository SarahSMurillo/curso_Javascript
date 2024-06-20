//Fibonacci

function Fibonacci(num){
    if (num>1){
       return Fibonacci(num-1) + Fibonacci(num-2)
        }  
    return num
}

let num=1;
console.log("Fibonacci")
Fibonacci(num);
//console.log(Fibonacci(num));
const fibo=[Fibonacci()]
console.log(fibo)






