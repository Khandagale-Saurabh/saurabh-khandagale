/*
let is block level scope
var is global level scope

Hoisting of var
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top
of their scope before code execution. This means that if we do this:

[

        console.log (greeter);
        var greeter = "say hello"

                                     it is interpreted as this:

        var greeter;
        console.log(greeter); // greeter is undefined
        greeter = "say hello"

]


*/




/*

1.When function is passes as argument to another function is called a CALLBACK FUNCTION
2.callback can be of two type 
i.e 
synchronous : it wait for opeation to complete after that it is excecute the next opeation.
asynchronous :it never wait for

[Closer is use for data hiding:inner function alwas have acess ti outter function variable]

*/

//Sync example: one wait for two to complete and finish execution
function  two() 
{
 console.log('inside two()');    
}
function one(x)
{
 console.log('inside one()');    

    x()
    console.log('end');

}

one(two)

//asynch
setTimeout(()=>console.log('Inside Timer || Async'),2000);
console.log('I will still execute because,I will not follow sequence,I will not wait for someone elese operations to be completed');


// Problem without callback

/*


*/

function getName(props)
{
    setTimeout(()=>{
        console.log('Inside Tiem out');
        return props
    },2000)
}
let a=getName('Tushar')
console.log(a);//Undifen dega ye problem 

//Solution


function CallMe(props) {
    console.log(props);
}


function getName(props,callback)
{
    setTimeout(()=>{
        console.log('Inside Timeout');
    //    callback(props);
    },2000)
}
// const a1=getName('Tushar',(a1)=>{console.log(a1);})



/*  

 promise irepresent object completion or failure of asynchroous operations
 can be
 [pending],[resolved],[fail]

             [then() and finally()]
            /
           Resolved
promise===/
          \
          Reject
            \
             [then(),finally(),catch()]

Creation type1
const promise

*/

let yy={
    a:'anb'
}
console.log(this);