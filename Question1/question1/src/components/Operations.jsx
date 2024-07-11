import React from 'react'
import './Operations.css'

function Operations(props) {
    return (
        <>
            <tr>
                <td><button onClick={() => props.appendMethod("+")} className="align btn-style opera-bg">+</button></td>
            </tr>
            <tr>
                <td><button className="align btn-style opera-bg" onClick={() => props.appendMethod("-")}>-</button></td>
            </tr>
            <tr>
                <td><button className="align btn-style opera-bg" onClick={() => props.appendMethod("/")}>/</button></td>
            </tr>
            <tr>
                <td><button className="align btn-style opera-bg" onClick={() => props.appendMethod("*")} >*</button></td>
            </tr>
            <tr>
                <td><button className="align eqn" id="eqn-bg" onClick={() => props.solveMethod()}>=</button></td>
            </tr>
        </>
    )
}

export default Operations
