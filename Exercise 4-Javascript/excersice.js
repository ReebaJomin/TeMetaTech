function duplicates(array,n){
    var temp=new Array(n);
    var i,j=0;
    for (i=0;i<n-1;i++)
    {
        if(array[i]!=array[i+1])
            temp[j++]=array[i];
    }
    temp[j++]=array[n-1];
    var arr=new Array(j);
    for (i=0;i<j;i++)
        arr[i]=temp[i];
    return arr;
}
const array=[1,2,2,3,4,4,5];
var n=array.length;
const uniqarray= duplicates(array,n);
console.log(uniqarray);
//  OUTPUT
//[ 1, 2, 3, 4, 5 ]