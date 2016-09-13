myApp.controller("NavController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("NavController works");



  // $scope.isLoggedIn = function(){
  //   $http.get('/logoff').then(function(res){
  //     console.log(res)
  //   });
  // };

  function signOut() {
      auth.signOut();
      console.log('hits signOut function');
  }




//here is where I could set the variable for whether the user is logged in or not



  $scope.userLogoff = function() {
      $http.post('/logoff').then(function() {

          console.log('user has logged out');
      });
    }

}]);
