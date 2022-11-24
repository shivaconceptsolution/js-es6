import React from "react"

export class SIClass extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {p:"",r:"",t:"",si:""}
        
    }

     enterP = (e) =>
    {
        this.setState({p:e.target.value})
    }
    enterR = (e) =>
    {
        this.setState({r:e.target.value})
    }
     enterT = (e) =>
    {
        this.setState({t:e.target.value})
    }
    calc = () =>
    {
        var res = (this.state.p*this.state.r*this.state.t)/100
        this.setState({si:res})
    }
    render()
    {
   return (<div>
          <input type="text" placeholder="Enter p" onChange={this.enterP} /> 
          <br/>
          <input type="text" placeholder="Enter r" onChange={this.enterR} /> 
          <br/>
          <input type="text" placeholder="Enter t" onChange={this.enterT} /> 
          <br/>
          <input type="button" value="Calculate" onClick={this.calc} /> 
          <br/>
          {this.state.si}
          
           </div>)
    }
}

