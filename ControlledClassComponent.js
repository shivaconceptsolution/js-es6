import React from "react";
export class ControlledClassComponent extends React.Component
{
    constructor(props)
    {
      super(props)
      this.state = {num1:0,num2:0,num3:0}
      this.inputNum1 = this.inputNum1.bind(this)
      this.inputNum2 = this.inputNum2.bind(this)
      this.addition = this.addition.bind(this)
    }
    inputNum1(e)
    {
        this.setState({num1:e.target.value})
    }
    inputNum2(e)
    {
        this.setState({num2:e.target.value})
    }
    addition(e)
    {
        var c = parseInt(this.state.num1) + parseInt(this.state.num2)
        this.setState({num3:c})
    }
   render()
    {
        return  (
                  <div>
                    <input type="text" onChange={this.inputNum1} /> <br/>
                    <input type="text" onChange={this.inputNum2} /> <br/>
                    <input type="button" onClick={this.addition} value="Addition" /> <br />
                    {this.state.num3}
                   </div>
                )
     }

}