myApp.controller("LoginController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("LoginController works");

  $scope.userInfo = {};

  $scope.loginInfo = function() {

        const email = $scope.userInfo.email;
        const password = $scope.userInfo.password;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(err, function(){
          console.log('error in auth');
        });

        console.log('username:', $scope.userInfo.email, 'password:', $scope.userInfo.password);
        $scope.userInfo = {};

    };
}]);
