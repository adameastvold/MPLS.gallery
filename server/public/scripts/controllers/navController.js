myApp.controller("NavController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("NavController works");

  $scope.isLoggedIn = function(){
    $http.get('/logoff').then(function(res){
      console.log(res)
    });
  };


  $scope.userLogoff = function() {
      $http.post('/logoff').then(function() {

          console.log('user has logged out');
      });
    }

}]);
