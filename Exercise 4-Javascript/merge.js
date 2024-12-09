const arr1=[1,3,7,8];
const arr2=[2,4,5,6];
const n1=arr1.length;
const n2=arr2.length;
const arr=arr1.concat(arr2);
const n=n1+n2;
function sort(arr,n)
{
    var i,j;
    for(i=0;i<n;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
            if(arr[j]>arr[j+1])
            {
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}
const sorted=sort(arr,n);
console.log(sorted);