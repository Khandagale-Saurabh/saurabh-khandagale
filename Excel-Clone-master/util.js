function solveFormula(formula, targetCell)
{
    let fcomp = formula.split(" ")
    for(let i=0; i<fcomp.length; ++i)
    {
        let comp = fcomp[i]
        if(comp>="A" && comp<="Z")
        {
            let {rowId, colId} = getRowColIdFromAddress(comp)
            let cellData = db[rowId][colId]
            let value = cellData.value
            if(targetCell && !db[rowId][colId].children.includes(targetCell))
            {    db[rowId][colId].children.push(targetCell);
                 targetCell.parents.push(comp)
            }
            formula = formula.replace(comp, value)
        }
    }
    return  eval(formula)
}

function getRowColIdFromAddress(address){

    let colId = address.charCodeAt(0) - 65;
    let rowId = Number(address.substring(1)) - 1;
    return {rowId , colId};
}

function updateChildren(cell)
{
    for(let i=0; i<cell.children.length; ++i)
    {
        let childCell = cell.children[i];
        let solvedValue = solveFormula(childCell.formula)
        let {rowId, colId} = getRowColIdFromAddress(childCell.name)

        let targetCell = document.querySelector(`[rowid="${rowId}"][colid="${colId}"]`)
        targetCell.textContent = solvedValue
        db[rowId][colId].value = solvedValue
        updateChildren(childCell)
    }
}

function deleteFormula(cellObject)
{
    cellObject.formula = "";
    for(let i=0; i<cellObject.parents.length; ++i)
    {
        let parentName = cellObject.parents[i];
        let {rowId, colId} = getRowColIdFromAddress(parentName);
        let parentCell = db[rowId][colId]
        parentCell.children = parentCell.children.filter(child => {
            return child.name!=cellObject.name;
        })
    }
    cellObject.parents=[]
}