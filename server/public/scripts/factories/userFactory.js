myApp.factory('UserFactory', ['$http', function($http) {


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



  window.onload = function() {
      initApp();
  };




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
