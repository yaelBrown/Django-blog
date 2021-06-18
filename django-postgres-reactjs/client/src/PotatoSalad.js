// let table = [
//   ["a", "b", "c"],
//   ["1", "2", "3"],
//   ["x", "y", "z"],
//   ["0", "9", "8"],
// ]

let tableObj = {
  meta: {
    maxCol: "",
    maxRow: ""
  },
  data: {
    "0x0": "a",
    "0x1": "b",
    "0x2": "c",
    "1x0": "1",
    "1x1": "2",
    "1x2": "3",
    "2x0": "x",
    "2x1": "y",
    "2x2": "z",
  }
}

// Needed for evaulateTable()
let col = ""
let row = ""

// Col + "x" + Row


// Helper functions for the other functions
const returnCol = (str) => str.split("x")[0]
const returnRow = (str) => str.split("x")[1]


// Updates metadata of the table
let evaluateTable = () => {
  let maxRow = "0"
  let maxCol = "0"

  for (const prop in tableObj.data) {
    let r = returnRow(prop)
    let c = returnCol(prop)
    
    console.log(`${prop}: ${tableObj.data[prop]}`)
    
    console.log('row: ' + r)
    if (parseInt(r) > parseInt(maxRow)) {
      maxRow = r
    }
    
    console.log('col: ' + c)
    if (parseInt(c) > parseInt(maxCol)) {
      maxCol = c
    }

    console.log("\n")
  }

  tableObj.meta.maxCol = maxCol
  tableObj.meta.maxRow = maxRow

  console.log("Max Row: " + maxRow)
  console.log("Max Col: " + maxCol)
}


// Adds a row or column to the table
let addRowOrCol = (rowOrCol) => {
  let mr = tableObj.meta.maxRow
  let mc = tableObj.meta.maxCol
  
  let nr = (parseInt(mr) + 1) + ""
  let nc = (parseInt(mc) + 1) + "" 

  switch(rowOrCol) {
    case "row":
      for (let i = 0; i <= mc; i++) {
        tableObj.data[nr + "x" + i] = "new row"
      }
      tableObj.meta.maxRow = nr
      break
    case "col":
      for (let j = 0; j <= mr; j++) {
        tableObj.data[j + "x" + nc] = "new col"
      }
      tableObj.meta.maxCol = nc
      break
    default: 
      return
  }
}


// Deletes rows or column
let delRowOrCol = (rowOrCol, rowOrColIdx) => {
  // delete all rows/cols
  switch(rowOrCol) {
    case "row":
      for (const prop in tableObj.data) {
        if (returnRow(prop) == rowOrColIdx) {
          delete tableObj.data.prop
          delete tableObj.data[prop]
        }
      }
      // if !(parseInt(rowOrColIdx) == tableObj.meta.maxRow) {
      //   for (const prop in tableObj.data) {
      //     if (returnRow(prop) > rowOrColIdx) {
      //       // Update the rows > rowOrColIdx to (currentRow - 1) so that there is not a empty row
      //     }
      //   }
      // }
      tableObj.meta.maxRow = (parseInt(tableObj.meta.maxRow) - 1) + ""
      break;
    case "col":
      // Do something similar of above but for Columns
      break;
    default:
      return
  }
}

let editRowOrCol = (tableIdx, newData) => tableObj.data[tableIdx] = newData








// Test the above methods

console.log("Evaluating a table")
evaluateTable()
console.log(tableObj)

// console.log("\n Adding a row")
// addRowOrCol("row")
// console.log(tableObj)

// console.log("\n Adding a col")
// addRowOrCol("col")
// console.log(tableObj)

// console.log("\n Adding a row")
// addRowOrCol("row")
// console.log(tableObj)

// console.log("\n Editing a cell")
// editRowOrCol("2x2", ":)")
// console.log(tableObj)

console.log("\n Deleting a row")
delRowOrCol("row", "2")
console.log(tableObj)

