const str="anna";
const n=str.length
var flag;
function palindrome(str)
{
    var i,j,flag=0;
    for(i=0,j=n-1;i<=n/2;i++,j--)
    {
        if(str[i]!=str[j])
        {
            flag=1;
            break;
        }
    }
    return flag;
}
if(flag==1)
    console.log("String is not palindrome");
else
    console.log("String is palindrome");

//  OUTPUT
//String is palindrome