import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {firebaseApp} from '../firebase'
class SignUp extends Component{
  state = {
    email: '',
    password: '',
    error: {
      message: ''
    }
  }
  signUp = () => {
    console.log('this.state', this.state)
    const {email, password} = this.state
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => this.setState({error:{message: err}}))
  }
  render(){
    return(
      <div>
        <h1>SignUp</h1>
        <form  noValidate style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
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
          <Button variant="contained" color="primary" onClick={() => this.signUp()}>Sign Up</Button>
          <p>{this.state.error.message}</p>
        </form>
      </div>
    )
  }
}

export default SignUp 