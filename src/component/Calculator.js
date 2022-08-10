import React, { Component } from 'react'
import "./calculator.css"

 class Calculator extends Component {
    
constructor(props) {
  super(props)
  this.state = {
     number:[1,2,3,4,5,6,7,8,9],
     calc:'',
     ops:['+','-','*','/'],
     setResult:''
  }
}

ans=()=>{
  this.setState({
    calc:""
  })
}
updateCal=(value)=>{
  if(
    this.state.ops.includes(value)&& this.state.calc === '' ||
    this.state.ops.includes(value) && this.state.ops.includes(this.state.calc.slice(-1))
  ){
    
  return;
}
this.setState({
  calc:this.state.calc+value
 })


if (!this.state.ops.includes(value)){
  let ans=eval(this.state.calc + value).toString();
this.setState({
  setResult:ans
})

}
}

  render() {
    return (
        <>
        <div className='App'>
        <div className='calculator'>
        <div className='display'>
       <span>
       <span className='ans'>{this.state.setResult?<span>Ans:{this.state.setResult}</span>:''}</span>
        {this.state.calc||"0"}
        </span>
        
        </div>
        <div>
        </div>

        <div className='operator'>
            <button onClick={()=>this.updateCal("+")}>+</button>
            <button onClick={()=>this.updateCal("-")}>-</button>
            <button onClick={()=>this.updateCal("*")}>*</button>
            <button onClick={()=>this.updateCal("/")}>/</button>
            <button onClick={()=>this.setState({
                calc:"",
                setResult:""
            })}>DEL</button>       
        </div>

        <div className='digit'>
        {this.state.number.map(item=><button onClick={()=>this.updateCal(item)} >{item}</button>)}
        <button onClick={()=>this.updateCal("0")}>0</button>
        <button onClick={()=>this.ans()}>=</button>
        <button onClick={()=>this.updateCal(".")}>.</button>
        </div>

        </div>
        </div> 
        </>
    )
  }
}
  
export default Calculator