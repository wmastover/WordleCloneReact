import React, { useEffect } from 'react';
import { Row } from './row';
import { Form } from './form';
import {  useSelector } from 'react-redux';
import { RootState} from "../redux/reduxStore"
import { addRow } from '../logic/addRowLogic';
import { changeWordle } from '../logic/changeWordle';
export const AppOverlay = () => {

    const wordle = useSelector((state:RootState) => state.wordle.value) 

    const rows = useSelector((state:RootState) => state.rows.value)
    
    //bug
    return (
        <div style={{display: "flex", flexDirection: "row",}}>
            {/* left column */}
            <div style={{flex: 1}}></div>

            <div style={{backgroundColor: "grey", padding: "2%", opacity: "80%",
                        borderRadius: "5%"}}>
                <header style={{flexDirection: "row"}}>
                    <h1 data-testid="test">Wordle</h1>                
                </header>
            
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Row row={rows[0]}/>
                    <Row row={rows[1]}/>
                    <Row row={rows[2]}/>
                    <Row row={rows[3]}/>
                    <Row row={rows[4]}/>
                    <Row row={rows[5]}/>
                </div>
                
                <Form addRowFunc={row => {addRow(wordle, row, rows)}} 
                changeWordleFunc={() => {changeWordle()}}/>
            </div>

            {/* right column */}
            <div style={{flex: 1}}></div>
        </div>
    );
}
