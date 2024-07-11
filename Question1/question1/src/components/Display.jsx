import React from 'react'
import './Display.css'

function Display(props) {
    return (
        <div id="result">
            <label >{props.result}</label>
        </div>
    )
}

export default Display
