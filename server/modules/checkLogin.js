var express = require('express');
var router = express.Router();
var firebase = require("firebase");

//==========FIREBASE INITIALIZE============
var config = {
    apiKey: "AIzaSyABjuATKjZvTibSBy00IjYbuIz3Qgp0-m8",
    authDomain: "mplsgallery.firebaseapp.com",
    databaseURL: "https://mplsgallery.firebaseio.com",
    storageBucket: "mplsgallery.appspot.com",
  };
  firebase.initializeApp(config);


var auth = firebase.auth();
var loggedOrNot = false;


//==========LOGIN===========
function login(email, password) {

    var promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(function(e) {
        // console.log("UserCred sent to Firebase:", e.message);
    })
}

//===========REGISTRATION==========
function register(email, password) {
  var promise = auth.createUserWithEmailAndPassword(email, password);
  promise.catch(function(e) {
      // console.log("Create User:", e.message);
  });

}

//===========LOGOFF=============
function signOut() {
    auth.signOut();
    console.log('hits signOut function');
}


//===========GET USER STATUS=============
auth.onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
        console.log('User Logged In:', firebaseUser.email);
        loggedOrNot = true;
    } else {
        console.log('not logged in');
        loggedOrNot = false;
    }
});

// router.get('/logstatus', function(){
//   console.log(logStatus);
// })
//
// module.exports = router

// exports.logStatus = function(){
//   return loggedOrNot;
// }

exports.userLogin = {
    start: function() {
        return "";
    },
    login: login,
    register: register,
    signOut: signOut
};
