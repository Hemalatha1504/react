import React, { Component } from 'react';
import './index.css';
class Egmount extends Component {
    constructor(props){
        super(props);
        this.state={counter:0}
        console.log("Constructor",this.state);
    }
    componentDidMount(){
        console.log("Mounting....");
        setTimeout(()=>{
            this.update();
        },1000);
       
    }
    update=()=>{
        this.setState({counter:this.state.counter+1});
    }
  render() {
    console.log("Rendering.....",this.state);
    return (
      <div> 
        <h3>Counter</h3>
        <h1>{this.state.counter}</h1>
       
      </div>
    );
  }
}

export default Egmount;
