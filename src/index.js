import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {firebaseApp} from './firebase'
// Components
import App from './components/App'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

firebaseApp.auth().onAuthStateChanged(user => {
  user ? console.log('user signed in', user) :
  console.log('user does not exist or logged out')
})

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
    </div>
  </Router>, 
  document.getElementById('root')
)