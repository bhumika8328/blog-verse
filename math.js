function greet(){
console.log("welcome to devastra")
}
greet()
export const add=function(x,y)
{
    return x+y;
}
let result=add(18,19)
console.log(result)

export const pi=3.14
console.log(pi)
export const multipy=function(x,y){
    return x*y;
}
console.log(multipy(5,3))
//arrow function
export const square=(x)=>x*x;
console.log(square(5))
 export const subtract=(x,y)=>{
return x-y;
}
console.log(subtract(20,15))
const divide=(x,y)=>{
    return x/y;

}
export default divide;

