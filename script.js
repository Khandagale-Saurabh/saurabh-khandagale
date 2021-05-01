let addbtnContainer=document.querySelector('.add-sheet_container');
let sheetList=document.querySelector('.sheets-list');
let firstSheet=document.querySelector('.sheet');
firstSheet.addEventListener('click',handleActiveSheet);
addbtnContainer.addEventListener('click',function(){
    let sheetArr=document.querySelectorAll('.sheet')
    let lastSheetElem=sheetArr[sheetArr.length-1];
    let idx=lastSheetElem.getAttribute('sheetIdx');
    idx=Number(idx)
    let NewSheet=document.createElement('div');
    NewSheet.setAttribute('class','sheet');
    NewSheet.setAttribute('sheetIdx',idx+1);
    NewSheet.innerText=`Sheet ${idx+1}`;
    sheetList.appendChild(NewSheet)
    NewSheet.addEventListener('click',handleActiveSheet)
})
function handleActiveSheet(e)
{
let MySheet=e.currentTarget;
let sheetArr=document.querySelectorAll('.sheet');
sheetArr.forEach(function(sheet){
    sheet.classList.remove('active-sheet');
})
if(!MySheet.classList[1])
{
MySheet.classList.add('active-sheet');
}
}
