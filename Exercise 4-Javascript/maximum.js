const arr=[12,45,78,10,41]
const n=arr.length;
function maximum(arr)
{
    var i;
    for(i=0;i<n;i++)
    {
        if(arr[0]<arr[i])
        {
            arr[0]=arr[i];
        }
    }
    return arr[0];
}
const max=maximum(arr);
console.log(max);