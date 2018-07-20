import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {firebaseApp} from './firebase'
// Components
import App from './components/App'
import SignUp from './components/SignUp'
import Login from './components/Login'

firebaseApp.auth().onAuthStateChanged(user => {
  user ? console.log('user signed in', user) :
  console.log('user does not exist or logged out')
})

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </div>
  </Router>, 
  document.getElementById('root')
)