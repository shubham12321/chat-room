import React from 'react';
import { Route, Link, BrowserRouter as Router, withRouter } from 'react-router-dom'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';
import SignIn from './login.js'
import SignUp from './signup.js'
import Main_page from './main.js'
import FooterPage from './Footer.js'
import First from './first.js'
import axios from 'axios'
import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAM8nbJESlWNxEAkdfQJLniRNeotSoktd0",
  authDomain: "social-6b117.firebaseapp.com",
  databaseURL: "https://social-6b117.firebaseio.com",
  projectId: "social-6b117",
  storageBucket: "social-6b117.appspot.com",
  messagingSenderId: "73227428633",
  appId: "1:73227428633:web:fae8e953ac3bf4e1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
         email: "",
         pass: "",
         user: "",
         name: "",
    }
  }

  googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
         // The signed-in user info.
         var user = result.user;
     //     console.log(user.displayName, user.email);
     //     var name= user.displayName;
         this.setState({
           user:user
         })
         console.log(user.displayName, user.email);
         axios.post('http://localhost:5000/login/',user.displayName)
         .then((res) => {
              console.log(res.data)
         })
         this.props.history.push('/home')
         // ...
    }).catch((error) => {
         console.log("error", error);

         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         // ...
    });
}
getName = (e) => {
     let name = e.target.value;
     this.setState(
          {
               name: name
          }
     )
 }


getEmail = (e) => {
    let email = e.target.value;
    this.setState(
         {
              email: email
         }
    )
}

getPass = (e) => {
    let pass = e.target.value;
    this.setState(
         {
              pass: pass
         }
    )
}

emailSignUp = () => {
    const email = this.state.email;
    const pass = this.state.pass
    firebase.auth().createUserWithEmailAndPassword(email, pass).then((result) => {
         // The signed-in user info.
         var user = result.user;
         console.log(user.displayName, user.email);
         this.props.history.push('/login')
         // ...
    })
         .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                   alert('The password is too weak.');
              } else {
                   alert(errorMessage);
              }
              console.log(error);
         });
}

emailSignIn = () => {
    const email = this.state.email;
    const pass = this.state.pass
    firebase.auth().signInWithEmailAndPassword(email, pass).then((result) => {
         // The signed-in user info.
         var user = result.user;
         console.log("sfsdfsfsf=",user.displayName, user.email);
         this.props.history.push('/home')
         // ...
    })
         .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode === 'auth/wrong-password') {
                   alert('Wrong password.');
              } else {
                   alert(errorMessage);
              }
              console.log(error);
              // ...
         });

        
}

checkLogin() {
    firebase.auth().onAuthStateChanged((user) => {
         if (user) {
              this.setState(
                   { user: user }
              )
              console.log("Logged In", user)

         } else {
              this.props.history.push('/login');
              console.log("Logged Out")
         }
    });
}

logout() {
    firebase.auth().signOut().then(() => {
         this.setState(
              { user: null }
         )
         this.props.history.push("/login")
    }).catch(function (error) {
         // An error happened.
    });
}

componentDidMount(){
  this.checkLogin()

  axios.get('http://localhost:5000/').then((res) => {
     console.log(res.data);
     console.log("chl gyi")
})
     // fetch('http://127.0.0.1:5000/').then(response=> response.json()).then(data=>console.log(data));
}

render() {
  return (

       <div>
        
        
         <Route path="/login" render={props => <SignIn {...props} googleLogin={this.googleLogin} emailSignIn={this.emailSignIn} ></SignIn>} />
         <Route path="/Signup" render={props => <SignUp {...props} googleLogin={this.googleLogin} emailSignUp={this.emailSignUp} getEmail={this.getEmail} getPass={this.getPass} getName={this.getName}></SignUp>} />
         <Route path="/home" render={props => <Main_page {...props} name={this.state.name} logout={this.logout.bind(this)}> </Main_page>} />
         <Route path="/home" component={FooterPage} />
         <Route exact path="/" component={First} /> 
       </div>

  )}
}

export default withRouter(App);
