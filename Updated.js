import React, { Component } from 'react';
import './index.css';
class Updated extends Component {
    constructor(props){
        super(props);
        this.state={
            counter:0,
            name:'hema'
        };
        console.log("Constructor");
    }
    componentDidMount(){
     /* setTimeout( ()=>{ this.setState({
            counter:this.state.counter+1,
            name:"Hemalatha"
        })},3000);*/
        console.log("mounting");
    }
    shouldComponentUpdate(nextProps, nextState) {
             if (this.state.counter === nextState.counter) {
              //  console.log(this.state.name,nextState.name);
              return false;
            } else {
               return true;
             }
           }
      
        componentDidUpdate() {
            console.log('Component componentDidUpdate',this.state)
              console.log('Component componentDidUpdate')
        }
     clik=()=>{
        this.setState({
            counter:this.state.counter+1,
            name:"Hemalatha"
        });
        console.log("event happened");
     }
  render() {
    console.log("rendering");
    return (
        <>
       
      <div><h1> Updated</h1>
      <h3>{this.state.counter}</h3>
      <h3>{this.state.name}</h3>
      <button onClick={this.clik}>clik</button>
       </div>
       
       </>
    );
  }
}

export default Updated;
