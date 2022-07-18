import React from 'react';


class Cycle extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor Phasing......");
    }
    componentDidMount(){
        console.log("Mounting.....");
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("Checking updation");
    }
    componentDidUpdate(){
        console.log("Updating.......");
    }
    change=()=>{
        console.log("Changing value");
    }
    render(){
        console.log("Rendering.....");
        return <div>
            <h1>Hiii !!!</h1>
            <button onClick={this.change}>Change</button>
        </div>
        
    }
}
export default Cycle;
