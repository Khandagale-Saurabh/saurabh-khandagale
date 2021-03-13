let reqq=require('request');
let cheerio =require('cheerio');
reqq('http://www.google.com',cb)
function cb(err,req,html)
{
    if(err)
    {
      console.log(err)
    }
    else
    {
      extracthtml(html)
        
    }

}


function extracthtml(html)
{
let t=cheerio.load(html);
let all=selectorTool("https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard
");
console.log(all.length);
let last=selectorTool(all[0]).text();
console.log(last);
}
































