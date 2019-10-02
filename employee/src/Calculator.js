import React from 'react';

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input1 : '',
            input2 : '',
            operation : 'Operation',
            result : '',
            history: []
        }
        this.setInput1  = this.setInput1.bind(this);
        this.setInput2  = this.setInput2.bind(this);
        this.result2     = this.result2.bind(this);
    }

    setInput1(event){
        let tempVal = parseInt(event.target.value);
        this.setState({
            input1 : tempVal
        });
    }

    setInput2(event){
        let tempVal = parseInt(event.target.value);
        this.setState({
            input2 : tempVal
        });
    }

    result2(Operator){
        var output;
        var tempVal;
        if(Operator==="add"){
             output = this.state.input1 + this.state.input2;
             tempVal = `${this.state.input1} + ${this.state.input2} = ${output}`;
        }else if(Operator==="sub"){
             output = this.state.input1 - this.state.input2;
             tempVal = `${this.state.input1} - ${this.state.input2} = ${output}`;
        }else if(Operator==="mul"){
             output = this.state.input1 * this.state.input2;
             tempVal = `${this.state.input1} * ${this.state.input2} = ${output}`;
        }else if(Operator==="div"){
             output = this.state.input1 / this.state.input2;
             tempVal = `${this.state.input1} / ${this.state.input2} = ${output}`;
        }else if(Operator==="mod"){
             output = this.state.input1 % this.state.input2;
             tempVal = `${this.state.input1} % ${this.state.input2} = ${output}`;
        }
        let tempArray = this.state.history;
        tempArray.push(tempVal);
        this.setState({
            result :output,
            operation : "Modulus",
            history : tempArray
        })
    }
    render(){
        return(
            <div>
                <label>Enter Inputs :</label>
                <input type ="number" name ="input1" id ="input1" onChange={this.setInput1}></input>
                <input type ="number" name ="input2" id ="input2" onChange={this.setInput2}></input>
                <br/>
                <button onClick={() => this.result2("add")}>+</button>
                <button onClick={() => this.result2("sub")}>-</button>
                <button onClick={() => this.result2("mul")}>*</button>
                <button onClick={() => this.result2("div")}>/</button>
                <button onClick={() => this.result2("mod")}>%</button>
                <br/>
                <label> Result of {this.state.operation} is {this.state.result}</label><br/>
                <label> History:</label>
                {this.state.history.length>0?this.state.history.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                }):''}
            </div>
        )
    }
}

export default Calculator;