myApp.factory('UserFactory', ['$http', function($http) {


  // var config = {
  //   apiKey: "AIzaSyABjuATKjZvTibSBy00IjYbuIz3Qgp0-m8",
  //   authDomain: "mplsgallery.firebaseapp.com",
  //   databaseURL: "https://mplsgallery.firebaseio.com",
  //   storageBucket: "mplsgallery.appspot.com",
  //   messagingSenderId: "821895055998"
  // };
  //  firebase.initializeApp(config);


   initApp();





  function toggleSignIn(email, password) {
      if (firebase.auth().currentUser) {
        console.log('You are signed in');
      } else {
          if (email.length < 4) {
              alert('Please enter an email address.');
              return;
          }
          if (password.length < 4) {
              alert('Please enter a password.');
              return;
          }
          // Sign in with email and pass.
          // [START authwithemail]
          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // [START_EXCLUDE]
              if (errorCode === 'auth/wrong-password') {
                  alert('Wrong password.');
              } else {
                  alert(errorMessage);
              }
              console.log(error);

              // [END_EXCLUDE]
          });
              console.log('signed in')
          // [END authwithemail]
      }

  }

  /**
   * Handles the sign up button press.
   */
  function handleSignUp(email, password) {
      if (email.length < 4) {
          alert('Please enter an email address.');
          return;
      }
      if (password.length < 4) {
          alert('Please enter a password.');
          return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/weak-password') {
              alert('The password is too weak.');
          } else {
              alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
      });
      console.log('registered!');
      // [END createwithemail]
  }

  /**
   * Sends an email verification to the user.
   */
  function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
          // Email Verification sent!
          // [START_EXCLUDE]
          alert('Email Verification Sent!');
          // [END_EXCLUDE]
      });
      // [END sendemailverification]
  }

  function sendPasswordReset(email) {
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
          // Password Reset Email Sent!
          // [START_EXCLUDE]
          alert('Password Reset Email Sent!');
          // [END_EXCLUDE]
      }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == 'auth/invalid-email') {
              alert(errorMessage);
          } else if (errorCode == 'auth/user-not-found') {
              alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
  }

  /**
   * initApp handles setting up UI event listeners and registering Firebase auth listeners:
   *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
   *    out, and that is where we update the UI.
   */
  function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
          // [START_EXCLUDE silent]
          // document.getElementById('quickstart-verify-email').disabled = true;
          // [END_EXCLUDE]
          if (user) {
            console.log('this is initApp:', user);
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              // [START_EXCLUDE silent]
              // document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
              // document.getElementById('quickstart-sign-in').textContent = 'Sign out';
              // document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
              if (!emailVerified) {
                  // document.getElementById('quickstart-verify-email').disabled = false;
              }
              // [END_EXCLUDE]
          } else {
              // User is signed out.
              // [START_EXCLUDE silent]
              // document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
              // document.getElementById('quickstart-sign-in').textContent = 'Sign in';
              // document.getElementById('quickstart-account-details').textContent = 'null';
              // [END_EXCLUDE]
          }
          // [START_EXCLUDE silent]
          // document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
      });
      // [END authstatelistener]


  }

  window.onload = function() {
      initApp();
  };



  // function authDataCallback(authData) {
  //   if (authData) {
  //     console.log("User " + authData.uid + " is logged in with " + authData.provider);
  //   } else {
  //     console.log("User is logged out");
  //   }
  // }
  // // Register the callback to be fired every time auth state changes
  //
  // firebase.onAuth(authDataCallback);





  function checkUserStatus(){
    // return firebase.auth().currentUser;
    // console.log(firebase.auth().currentUser);
    if (firebase.auth().currentUser) {
      console.log('You are signed in');
    } else {
      console.log('You are signed out');
    }
  }



  function signOut(){
    firebase.auth().signOut();
    console.log('You have logged off');
  }





  return {
    toggleSignIn: function() {
      return toggleSignIn;
    },
    handleSignUp: function() {
      return handleSignUp;
    },
    sendEmailVerification: function() {
      return sendEmailVerification;
    },
    checkUserStatus: function(){
      return checkUserStatus;
    },
    signOut: function(){
      return signOut;
    }

    // galleryData: function() {
    //   return coolFunc;
    // }
  };
}]);
