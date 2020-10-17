import React from 'react';
import {Child} from './Child';

export default class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      counter: 0
    }
  }

  update(value){
    return () => {
       this.setState({
         counter: value
       });
    }
  }

  render(){
    return(
      <div>
        <span>{this.state.counter}</span>
        <Child data={this.update.bind(this)}/>
      </div>
    );
  }
}