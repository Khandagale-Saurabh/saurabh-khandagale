let topRow = document.querySelector(".top-row");
let topRowCells = document.querySelectorAll(".top-row-cell");
let leftColCells = document.querySelectorAll(".left-column-cell");
let leftCol = document.querySelector(".left-column");
let topLeftCell = document.querySelector(".top-left-cell");
let cells = document.querySelector(".cells");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let allCells = document.querySelectorAll(".cell");

let visitedCells = []

cellsContent.addEventListener("scroll" , function(e){
    let top = e.target.scrollTop ;
    let left =  e.target.scrollLeft;

    topRow.style.top = top+"px";
    leftCol.style.left = left+"px";
    topLeftCell.style.top = top+"px";
    topLeftCell.style.left = left+"px";
})

let rowId;
let colId;
let lastSelectedCell;

cells.addEventListener("click", function(e){
    
    let currentCell = e.target;
    rowId = Number(currentCell.getAttribute("rowid"));
    colId = Number(currentCell.getAttribute("colid"));
    visitedCells.push(document.querySelector(`[rowid="${rowId}"][colid="${colId}"]`))

    if(document.querySelector(".highlight-cell"))
    {   
        let r = Number(document.querySelector(".highlight-cell").getAttribute("rowid"))
        let c = Number(document.querySelector(".highlight-cell").getAttribute("colid"))
        document.querySelector(".highlight-cell").classList.remove("highlight-cell")
        topRowCells[c].style.background = ""
        leftColCells[r].style.background = "#ecf0f1e7"
    }
    
    if(document.querySelector(".highlight-col"))
    {
        let elements = document.querySelectorAll(".highlight-col")
        elements[0].style.borderTop="";
        for(let i=0; i<elements.length; ++i)
            elements[i].classList.remove("highlight-col")
        elements[elements.length-1].style.borderBottom=""
            
    }
    
    currentCell.classList.add("highlight-cell")
    topRowCells[colId].style.background = "lightgray"
    leftColCells[rowId].style.background = "lightgray"
    let address = String.fromCharCode(65+rowId)+(colId+1)+"";
    let cellData = db[rowId][colId]
    addressInput.value = address
    formulaInput.value = cellData.formula

    setMenu(cellData); 
})

for(let i=0; i<cells.clientHeight; ++i)
{
    allCells[i].addEventListener("blur" , function(e){
        let currentElement = e.target;
        lastSelectedCell = currentElement;
        let value = currentElement.textContent;
        let cellData = db[rowId][colId]; 
        if(value != cellData.value){
            {   if(cellData.formula)
                    deleteFormula(cellData)
                cellData.value = value;
                updateChildren(cellData)
            }
        }
    })

    allCells[i].addEventListener("keyup", function(e){
        let cellHeight = e.target.getBoundingClientRect().height;
        let rowId = e.target.getAttribute("rowid");
        let row = document.querySelector(`div[cell-id="${rowId}"]`)
        row.style.height = cellHeight+"px"
        // e.target.style.border = "2px solid black;"
    })
}

formulaInput.addEventListener("blur", function(e){
    let formula = formulaInput.value;
    if(formula && lastSelectedCell)
    {   
        let cellData = db[rowId][colId];
        let solvedValue = solveFormula(formula, cellData)
        //setting in UI
        lastSelectedCell.textContent = solvedValue
        //setting in DB
        cellData.value = solvedValue
        cellData.formula = formula
        updateChildren(cellData)
    }
})

for(let i=0; i<topRowCells.length; ++i)
{   
    topRowCells[i].addEventListener("click", function(e){
        if(document.querySelector(".highlight-cell"))
            document.querySelector(".highlight-cell").classList.remove("highlight-cell")
            
        if(document.querySelector(".highlight-col"))
        {
            let elements = document.querySelectorAll(".highlight-col")
            elements[0].style.borderTop="";
            for(let i=0; i<elements.length; ++i)
                elements[i].classList.remove("highlight-col")
            elements[elements.length-1].style.borderBottom=""
                
        }
            
        let colName = e.target.innerText;
        let colId = colName.charCodeAt(0)-65;
        let colCells = document.querySelectorAll(`[colid="${colId}"]`)
        
        colCells[0].style.borderTop = "2px solid black";
        for(let j=0; j<colCells.length; ++j)
            colCells[j].classList.add("highlight-col")
        colCells[colCells.length-1].style.borderBottom = "2px solid black";
        colCells[0].style.background="white"
    })
}