function sort(arr)
{
    var temp;
    var i,j;
    const n=arr.length;
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
const arr=[1,4,8,2,3]
const sorted=sort(arr);
console.log(sorted);
//  OUTPUT
//[ 1, 2, 3, 4, 8 ]