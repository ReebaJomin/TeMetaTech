const people=[{name:'Alice',age:21},{name:'James',age:30},{name:'Rebecca',age:25}]
const avg= average(people);
console.log(avg);
function average(people){
    const total=people.reduce((sum,person)=>sum+person.age,0);
    const avg=total/people.length;
    return avg;
}
//  OUTPUT
//25.333333333333332