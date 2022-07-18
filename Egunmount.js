import React, { Component } from 'react';

class Egunmount extends Component {
  constructor(){
    super();
    this.state = {
      delete: false,
      value:''
   };

  }
  
  delete=()=>{
    this.setState({ delete: true })
    
  }
  render() {
    return (
      <div> <h1>Unmounting </h1>
        <h3> List</h3>
       
           <button onClick={this.delete}>
              Delete Users
           </button>
           {this.state.delete ? null : <User />}

      </div>
    );
  }
}

class User extends React.Component { //component
  componentWillUnmount() {
     console.log('Deleted User successfully');
  }
  render() {
     return (
        <div>
           <ul>
            <li>Tea</li>
            <li>Coffee</li>
            <li>Black Coffee</li>
           </ul>
        </div>
     );
  }
}

export default Egunmount;
