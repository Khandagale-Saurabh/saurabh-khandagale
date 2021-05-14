//calling function inside function is called as callback ,it is use mainly for async
let a=10;
function first(subfunction)
{
    
    console.log("Before a="+a);


         subfunction()
    console.log("after a="+a);
}

function subfunction()
{
    a=20;
} 
first(subfunction);



//Problem with this is async 

function f1()
{
console.log("Before value of a="+a);
f2()
console.log("After Value of a="+a);
}

