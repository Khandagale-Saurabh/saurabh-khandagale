let cellsContent = document.querySelector(".cells-content");


(function(){

    //top left cell
    let cellsContentHtml = `<div class="top-left-cell"></div>`

    //top row
    cellsContentHtml+= `<div class="top-row">`
    for(let i=0; i<26; ++i){
        cellsContentHtml+= `<div class="top-row-cell">${String.fromCharCode(65+i)}</div>`
    }
    cellsContentHtml+= `</div>`


    //left column
    cellsContentHtml+= `<div class="left-column">`
    for(let i=0; i<100; i++){
        cellsContentHtml+= `<div class="left-column-cell" cell-id="${i}">${i+1}</div>`
    }
    cellsContentHtml+= `</div>`


    //cells
    cellsContentHtml += `<div class="cells">`
    for(let i=0; i<100; ++i)
    {   cellsContentHtml += `<div class="row">`;
        for(let j=0; j<26; ++j)
        {
            cellsContentHtml+=`<div class="cell" rowid=${i} colid=${j} contenteditable="true"></div>`
        }
        cellsContentHtml+=`</div>`
    }
    cellsContentHtml+= `</div>`

    cellsContent.innerHTML = cellsContentHtml
})()

let sheetsDB = []
let db;

function initDB()
{
    let newdb = []

    for(let i=0; i<100; ++i)
    {
        let row=[]
        for(let j=0; j<26; ++j)
        {
            let obj = {
                name: String.fromCharCode(65+j)+(i+1)+"",
                value:"",
                formula:"",
                children:[],
                parents:[],
                fontStyle: { bold: false, italic: false, underline: false},
                textAlign: "left",
                fontFamily: 0,
                fontSize: 16,
                fontColor: "black",
                cellColor: "white",
            }
            row.push(obj)
        }
        newdb.push(row)
    }
    db=newdb
    sheetsDB.push(newdb)
}

initDB()