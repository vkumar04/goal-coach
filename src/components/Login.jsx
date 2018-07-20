import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { firebaseApp } from '../firebase';

class Login extends Component{
  state = {
    email: '',
    password: '',
    error: {
      message: ''
    }
  }
  login = () => {
    const {email, password} = this.state
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(err => this.setState({error: err}))
  }
  render(){
    return(
      <div>
       <h1 style={{fontFamily: 'roboto', textAlign: 'center'}}>Login</h1>
        <form  noValidate style={{display: 'flex', flexDirection: 'column', margin: '10px auto', width: '300px', alignItems: 'center'}}>
          <TextField
            id="email"
            label="Email"
            margin="normal"
            onChange={e => this.setState({email: e.target.value})}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            margin="normal"
            onChange={e => this.setState({password: e.target.value})}
          />
          <Button style={{marginTop: '20px'}} variant="contained" color="secondary" onClick={() => this.login()}>Login</Button>
          <p>{this.state.error.message}</p>
        </form> 
      </div>
    )
  }
}

export default Login