import React, { Component } from 'react'
import Display from './Display'
import Buttons from './Buttons'
import Operations from './Operations'

import './Calculator.css'


let resultState = false;

class Calculator extends Component {

    constructor(props) {
        super(props)

        this.state = {
            displayResult: ""
        }

        this.clearme = this.clearme.bind(this)
        this.solveme = this.solveme.bind(this)
    }

    render() {
        return (
            <div className="calculator">
                <Display result={this.state.displayResult} />
                <table className="buttonBox">
                    <tbody >
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <Buttons appendMethod={this.append} clearMethod={this.clearme} />
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tbody>
                                        <Operations appendMethod={this.append} solveMethod={this.solveme} />
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        )
    }

    append = (newValue) => {
        if (resultState == true) {
            this.setState({
                displayResult: ""
            })
            resultState = false
        }
        this.setState((prevState) => {
            return {
                displayResult: prevState.displayResult + newValue
            }
        })
    }

    clearme() {
        let str = this.state.displayResult
        let newStr = str.substring(0, str.length - 1)
        this.setState({
            displayResult: newStr
        })
    }

    solveme() {
        let result;
        try {
            result = eval(this.state.displayResult);
        } catch (e) {
            result = "Math error"
            resultState = true
        }

        this.setState({
            displayResult: result + ""
        })
    }
}


export default Calculator
