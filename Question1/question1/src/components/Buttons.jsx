import React from 'react'

import './Buttons.css'

function Buttons(props) {
    return (
        <>
            <tr>
                <td colSpan="3"><button onClick={() => props.clearMethod()} className="del-bg">DEL</button></td>
            </tr>
            <tr>
                <td><button onClick={() => props.appendMethod("1")} className="btn-style num-bg num first-child">1</button></td>
                <td><button onClick={() => props.appendMethod("2")} className="btn-style num-bg num first-child">2</button></td>
                <td><button onClick={() => props.appendMethod("3")} className="btn-style num-bg num first-child">3</button></td>
            </tr>
            <tr>
                <td><button onClick={() => props.appendMethod("4")} className="btn-style num-bg num first-child">4</button></td>
                <td><button onClick={() => props.appendMethod("5")} className="btn-style num-bg num first-child">5</button></td>
                <td><button onClick={() => props.appendMethod("6")} className="btn-style num-bg num first-child">6</button></td>
            </tr>
            <tr>
                <td><button onClick={() => props.appendMethod("7")} className="btn-style num-bg num first-child">7</button></td>
                <td><button onClick={() => props.appendMethod("8")} className="btn-style num-bg num first-child">8</button></td>
                <td><button onClick={() => props.appendMethod("9")} className="btn-style num-bg num first-child">9</button></td>
            </tr>
            <tr>
                <td colSpan="2"><button onClick={() => props.appendMethod("0")} className="num-bg" id="delete">0</button></td>
                <td><button className="num-bg btn-style" onClick={() => props.appendMethod(".")}>.</button></td>
            </tr>
        </>

    );
}

export default Buttons
