myApp.controller("LoginController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("LoginController works");

  $scope.userCred = {};


    $scope.isLoggedIn = false;
    $scope.userLogin = function(email, password) {
        var userInfo = {
            email: email,
            password: password
        };

        $http.post('/login', userInfo).then(function() {
            console.log('user info sent', userInfo);
        });
        $scope.userCred = {};
        $scope.loginForm.$setUntouched();
        $scope.loginForm.$setPristine();
      }

    $scope.userRegister = function(email, password) {
       var userInfo = {
           email: email,
           password: password
       };
       console.log('user info sent', userInfo);
       $http.post('/register', userInfo).then(function(response) {
           console.log('this is the register response:', response.data);
       });
     }


}]);
