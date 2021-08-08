let addSheet = document.querySelector(".add-sheet");
let sheetsList = document.querySelector(".sheet-list");
let sheetId = 0;

addSheet.addEventListener("click" , handleAddSheet);
sheetsList.addEventListener("click" , handleSheetSwitch)
sheetsList.addEventListener("dblclick" , removeSheet)

function handleAddSheet(e){
    sheetId++;
    document.querySelector(".active-sheet").classList.remove("active-sheet");

    let sheet = document.createElement("div");
    sheet.classList.add("sheet");
    sheet.classList.add("active-sheet");
    sheet.setAttribute("sid" , sheetId);
    sheet.textContent = `Sheet${sheetId+1}`;

    sheetsList.append(sheet);

    // init DB
    initDB();

    // initUI
    initUI();

}
function handleSheetSwitch(e){
    let selectedSheet = e.target;
    if(selectedSheet.classList.contains("active-sheet")){
        return;
    }
    document.querySelector(".active-sheet").classList.remove("active-sheet");
    selectedSheet.classList.add("active-sheet");

    // db set
    let selectedSheetId = selectedSheet.getAttribute("sid");
    db = sheetsDB[selectedSheetId];

    // ui set
    setUI();
}

function initUI(){
    for(let i=0 ; i<visitedCells.length ; i++){
        visitedCells[i].textContent = "";
        allCells[i].style="";
    }
    formulaInput.value=""
    if(document.querySelector(".active-menu"))
        document.querySelector(".active-menu").classList.remove("active-menu")
}

function setUI(){
    for(let i=0 ; i<visitedCells.length ; i++){
        let rowId = visitedCells[i].getAttribute("rowid");
        let colId = visitedCells[i].getAttribute("colid");
        let cellObject = db[rowId][colId]
        visitedCells[i].textContent = cellObject.value;
        visitedCells[i].style.fontWeight = cellObject.fontStyle.bold ? "bold" : "normal";
        visitedCells[i].style.fontStyle = cellObject.fontStyle.italic ? "italic" : "normal";
        visitedCells[i].style.fontDecoration = cellObject.fontStyle.bold ? "underline" : "normal";
        visitedCells[i].style.textAlign = cellObject.textAlign
        visitedCells[i].style.fontFamily = fontFamilyOptions[cellObject.fontFamily]
        visitedCells[i].style.fontSize = cellObject.fontSize+"px"
        visitedCells[i].style.color = cellObject.fontColor
        visitedCells[i].style.background = cellObject.cellColor
    }
    formulaInput.value=""
} 

function setMenu(){

}

function removeSheet(e)
{
    let currentSheet = e.target;
    let selectedSheetId = Number(currentSheet.getAttribute("sid"));
    let previousSheet = sheetsList.querySelector(`[sid="${selectedSheetId-1}"]`);
    currentSheet.remove()
    
    previousSheet.classList.add("active-sheet");

    // db set
    
    db = sheetsDB[selectedSheetId-1];

    // ui set
    setUI();
}