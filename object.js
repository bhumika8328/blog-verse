let persons=[{
    
        name:"bhumika",
        marks:89
},{
    name:"siri",
    marks:78
 }]
 console.log(persons)
 let maxMarks=0;
 let topper="";
 for(let person of persons){
    if(person.marks>maxMarks){
        maxMarks=person.marks
    }
 }
