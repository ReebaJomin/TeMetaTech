function factorial(n)
{
    if(n==1||n==0)
        return 1;
    else
        return n*factorial(n-1);
}
const n=5;
const fact=factorial(n);
console.log(fact)