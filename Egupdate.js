import React, { Component } from 'react'

export default class Egupdate extends Component {
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            load:0
        };
    }
    componentDidMount(){
        setTimeout(()=>{
           this.update();
           this.setState({load:this.state.load+1})
        }
        );
    }
    update=()=>{
        this.setState({
            date:new Date(),
        });
    };
    render() {
        console.log(this.state.date.toLocaleTimeString());
        return (
            <div>
                <h1>Update</h1>
                <h3>It is{this.state.date.toLocaleTimeString()}</h3>
                <h3>Load : {this.state.load}</h3>
            </div>
        )
    }
}
