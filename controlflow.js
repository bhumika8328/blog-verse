 let day=2;
 switch(day){
    case 1:
        console.log("monday")
        break;
    case 2:
         console.log("tuesday");
        break;
     case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
    case 6:
        console.log("saturday")
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid")
        break;

}
//let i="+"
//for(j=0;j<n;j++){
   // console.log(i);
//}
let colors=["red","blue","jreen"]
for( let i=0;i<colors;i++)
{
    console.log(colors[i])
}
for(let  color of colors){
    console.log(colors)
}
let person=
{
    name:"bhumika",
    age:22,
    college:"JNTUGV"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}
for(let i=5;i>=0;i--)P{
    if(i==3){
        continue;
    
    }elseif(i==2){
        break;
    }
}

