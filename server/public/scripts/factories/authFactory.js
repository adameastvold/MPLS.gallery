// var config = {
//   apiKey: "AIzaSyABjuATKjZvTibSBy00IjYbuIz3Qgp0-m8",
//   authDomain: "mplsgallery.firebaseapp.com",
//   databaseURL: "https://mplsgallery.firebaseio.com",
//   storageBucket: "mplsgallery.appspot.com",
//   messagingSenderId: "821895055998"
// };


(function() {
    'use strict';

    angular.module('myApp').factory('AuthFactory', ['$firebaseAuth', Auth]);

    function Auth($firebaseAuth) {
        return $firebaseAuth();
    }
})();
