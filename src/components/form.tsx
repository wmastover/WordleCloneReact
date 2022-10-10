import React, { DetailedHTMLProps } from 'react';
import { useState } from 'react';
import { ButtonProps } from '../type/data';


export const Form = ({addRowFunc, changeWordleFunc}: ButtonProps) => {

 

    const [text, setText] = useState("")

    return(
        <form 
            onSubmit={e => {
                e.preventDefault()
                if (text.length ===5 ) {
                    addRowFunc(text)} else {
                        alert("must be 5 letters long")
                    }
                setText("")
            }}
        >
            <div style={{flexDirection: "row", display: "flex", margin:"5%",}}>
                <input
                style={{margin: "2%", flex: 4}}
                type="text"
                onChange={(e) => {
                    if (e.target.value.length < 6) {
                        setText(e.target.value)
                    } else {
                        alert("Must be 5 characters")
                    }
                }}
            
                value={text}
                name="text"
                />
                <button
                style={{margin: "2%", flex: 1}}
                type="button"
                onClick={() => {if (text.length ===5 ) {
                    addRowFunc(text)} else {
                        alert("must be 5 letters long")
                    }
                    setText("")
                }}
                
                > submit </button>
                <button
                style={{margin: "2%", flex: 1}}
                type="button"
                onClick={() => {changeWordleFunc()}}
                > change wordle </button>
            </div>
        </form>
    )
}