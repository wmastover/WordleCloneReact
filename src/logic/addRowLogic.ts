import { RootState, store } from "../redux/reduxStore"
import { setRowsFunction, row, rowItem, letter} from "../type/data"
import { addRow as addrow2 } from "../redux/rowsSlice"
import { Provider, useSelector } from 'react-redux';
import { changeWordle } from "./changeWordle";
const getColor = (wordle: Array<string>, char:string, charIndex:number):string => {
    console.log(wordle)
    console.log(wordle[charIndex], char)
    if (wordle[charIndex] === char) {
        return("green")
    } else if ( wordle.includes(char)) {
        return("yellow")
    } else {
        return("white")
    }

}


export const addRow = (wordle: Array<string>, row:string, rows:row[]) => {
    

        console.log("add row wordle", wordle)
        // object containing rowItems
        const rowObject = [] as row
     
        let winCounter = 0
        //for each letter in string, create row item
        //color logic hasnt yet been created
        for (let i = 0; i < 5; i++) {
    
            const char = row.charAt(i).toLowerCase() as letter
            const color = getColor(wordle, char, i )
    
            if (color === "green") { winCounter++}
    
            const rowItem = {
                color: color,
                letter: char,
            } as rowItem
    
    
            rowObject.push(rowItem)
        }
        
        store.dispatch(addrow2(rowObject))
    
        if (winCounter === 5) { 
            alert("winner, winner, chicken diner. Click ok to change Wordle")
            changeWordle()
        } else if (rows.length === 6){ 
            alert("you loose, click ok to play again")
            changeWordle()
        } 
    
}