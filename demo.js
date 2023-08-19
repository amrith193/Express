const Hello =() =>{
    const time= new Date().toLocaleTimeString();
    const date= new Date().toLocaleDateString();
    console.log("time: "+time)
    console.log("date: "+date)
}
const name =()=>{
    const a ="amrith"
    console.log("my name is "+a)
}
const add = (num1, num2) => {
    return num1 + num2;
};
const sub = (num1, num2) => {
    return num1 - num2;
};
const mul =(num1,num2)=>{
    return num1 * num2;

}

const num1 = 15;
const num2 = 10;

const sum = add(num1, num2);
const subt = sub(num1, num2);
const mulx = mul(num1 ,num2)

console.log("The sum is " + sum);
console.log("The sub is " + subt);
console.log("The multi is " + mulx);

module.exports={Hello,name,add,sub,mul}
