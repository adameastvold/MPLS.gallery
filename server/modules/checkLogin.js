var express = require('express');
var router = express.Router();
var firebase = require("firebase");

// FIREBASE INITIALIZE
var config = {
    apiKey: "AIzaSyABjuATKjZvTibSBy00IjYbuIz3Qgp0-m8",
    authDomain: "mplsgallery.firebaseapp.com",
    databaseURL: "https://mplsgallery.firebaseio.com",
    storageBucket: "mplsgallery.appspot.com",
  };
  firebase.initializeApp(config);


var auth = firebase.auth();

//login
function login(email, password) {

    var promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(function(e) {
        console.log("UserCred sent to Firebase:", e.message);
    })
}

//sign up
function register(email, password) {
  var promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(function(e) {
      console.log("Create User:", e.message);
  });

}

//sign out
function signOut() {
    auth.signOut();
}


//get user
auth.onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
        console.log('User Logged In:', firebaseUser.email);
    } else {
        console.log('not logged in');
    }
});




exports.userLogin = {
    start: function() {
        return "";
    },
    login: login,
    register: register
};

// //check connection
// function checkConnection() {
//     var dbRef = firebase.database().ref().child('header');
//     dbRef.on('value', function(snap) {
//         console.log(snap.val())
//     });
// }
