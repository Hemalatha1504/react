import React, { Component } from 'react';
import './index.css';
class Egmount extends Component {
    constructor(props){
        super(props);
        this.state={load:0,
        data:[]
    };
        console.log("Constructor",this.state);
    }
    async componentDidMount(){
        console.log("Mounting....");
        try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const data=await response.json();
       
        setTimeout(()=>{
            this.setState({data:data.splice(0,3),load:1});
        },3000);    
        console.log(data);   
    }
    catch(err){
        console.log(err);
    }
    }
   
  render() {
    console.log("Rendering.....",this.state);
    const {data}=this.state;
    return (
      <div> 
        {
            this.state.load===1 ?<div>
                <h1>bhuji</h1>
                <ul>
                    {data.map((item)=>{
                    return <li >{item.name}</li>
                } )}
                </ul>
           </div>
            :<h1>Loading......</h1>
        }
        
       
      </div>
    );
  }
}

export default Egmount;
