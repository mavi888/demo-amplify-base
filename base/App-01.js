import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Notes App</h1>
        </header> 
        <AmplifySignOut />
      </div>
     
    )
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { notes:[] }
  }

  async componentDidMount(){
  }  

  render() {
    return (
      <AmplifyAuthenticator>
      <div className="row">
        <div className="col m-3">
          <Header/>
        </div> 
      </div> 
      </AmplifyAuthenticator>
    );
  }
}

export default App;
