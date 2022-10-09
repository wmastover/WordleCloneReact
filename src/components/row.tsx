import React from 'react';
import { row, rowItem } from '../type/data';

export const Row = ({row}: {row?:row}) => {

    const rowItem = {
        letter: " ",
        color: "white"

    } as rowItem

    if (row === undefined) {
        row = [rowItem,rowItem,rowItem,rowItem,rowItem,] as row
    }


    return (
        <div style={{display: "flex", flexDirection: "row", flex: 1}}>
            <div style={{backgroundColor: row[0]?.color, flex: 1, margin: "2%", 
            padding: "2%", height: "20px", borderRadius: "10%",}}>
                <text>{row[0]?.letter}</text>
            </div>
            <div style={{backgroundColor: row[1]?.color, flex: 1, margin: "2%", 
            padding: "2%", height: "20px", borderRadius: "10%", opacity: "100%"}}>
                <text>{row[1]?.letter}</text>
            </div>
            <div style={{backgroundColor: row[2]?.color, flex: 1, margin: "2%", 
            padding: "2%", height: "20px", borderRadius: "10%", opacity: "100%"}}>
                <text>{row[2]?.letter}</text>
            </div>
            <div style={{backgroundColor: row[3]?.color, flex: 1, margin: "2%", 
            padding: "2%", height: "20px", borderRadius: "10%", opacity: "100%"}}>
                <text>{row[3]?.letter}</text>
            </div>
            <div style={{backgroundColor: row[4]?.color, flex: 1, margin: "2%", 
            padding: "2%", height: "20px", borderRadius: "10%", opacity: "100%"}}>
                <text>{row[4]?.letter}</text>
            </div>
        </div>
    );
}

