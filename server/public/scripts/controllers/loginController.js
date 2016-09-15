myApp.controller("LoginController", ["$scope", "$http", "$location", 'UserFactory', 'AuthFactory', function($scope, $http, $location, UserFactory, AuthFactory) {
  console.log("LoginController works");


  var userFactory = UserFactory;
  var login = userFactory.toggleSignIn();
  var register = userFactory.handleSignUp();
  var checkUserStatus = userFactory.checkUserStatus();

  $scope.userCred = {};



    $scope.userLogin = function(email, password) {
        login(email, password);
        // $scope.testUser();


        $scope.userCred = {};
        $scope.loginForm.$setUntouched();
        $scope.loginForm.$setPristine();
      }

    $scope.userRegister = function(email, password) {
        register(email, password);
        // $scope.testUser();
     }

     $scope.testUser = function(){
       checkUserStatus()
       console.log(checkUserStatus());

     }


     $scope.auth = AuthFactory;

     $scope.auth.$onAuthStateChanged(function(user) {
       $scope.user = user;
       console.log(user); //change the path here
     });


}]);
