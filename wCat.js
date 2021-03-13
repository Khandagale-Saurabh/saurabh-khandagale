let fs=require('fs');
let input =process.argv.slice(2);

let cmd=input[0];
let cmd1=input[1];

console.log("-----"+cmd);
console.log("-----"+cmd1);
try {
    let data=fs.readFileSync('C:/Users/saurabh/Desktop/Pep_Dev/hw1/'+cmd1);
    var arr=data.toString().split('\n')

   if(cmd=='-n')
   {
  count =0;
   for(let i=0;i<arr.length;i++)
   {
       count++;
    console.log(count+"-"+arr[i]);
       if(arr[i]=='/n')
       {
         console.log("  Balnk----");
       }
   } 
   }

  if(cmd=='-s')
  {
    //console.log(""+data.toString().split('/n').length);
     var arr=data.toString().split('\n');
     var ar2="";
      console.log("---");
     for(let i=0;i<arr.length;i++)
     {
       // console.log("---");
        if(arr[i].length==1)
        {
          ar2[i]=arr[i]
        }
        
     }
      console.log(ar2);
  }

   if(cmd=='-b')
   {
     var arr=data.toString().split('\n');
      count=0;
     for(let i=0;i<arr.length;i++)
     {
        
         if(arr[i].length==1)
         {
          count++;
          console.log(count+"-"+arr[i]);
         }
         else{
           console.log(""+arr[i]);
             }
     }
   }

         
} catch (error)
 {
 console.log(error);    
}