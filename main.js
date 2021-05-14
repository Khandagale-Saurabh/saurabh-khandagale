let input=document.querySelector('.input');
let ul=document.querySelector('.task-list');

input.addEventListener("keydown",function(e){
console.log("event ",e);
if(e.key=='Enter')
{
 let task=input.value;
let li=document.createElement('li');
li.innerText=task;
li.addEventListener("dbclick",function(e){
li.remove();
})
li.setAttribute('class','task');
ul.appendChild(li);
input.value="";
}
})