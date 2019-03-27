import React, {Component} from 'react';
import Navigation from './Components/Navigation';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Navigation/>
      </div>
    );
  }
}