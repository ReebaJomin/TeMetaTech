function reverse(str)
{
    const reversed=str.split("").reduce((acc,char)=>char+acc,"");
    return reversed
}
const str="Hello World";
reversed=reverse(str);
console.log(reversed)