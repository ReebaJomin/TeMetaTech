function fibonacci(n)
{
    if(n==0||n==1)
        return n;
    else
        return(fibonacci(n-1)+fibonacci(n-2));
}
n=8;
const fib =fibonacci(n-1)
console.log(fib);