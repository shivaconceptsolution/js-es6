import React from "react";
export class Reactlifecycle extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
        this.changeColor = this.changeColor.bind(this);
      }
      shouldComponentUpdate() {
        return false;
      }
      changeColor()
       {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <input type="button" onClick={this.changeColor} value="change color" />
          </div>
        );
      }
    
}