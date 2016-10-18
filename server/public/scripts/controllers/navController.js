myApp.controller("NavController", ["$scope", "$http", "$location", "UserFactory", "AuthFactory", function($scope, $http, $location, UserFactory, AuthFactory) {
  // console.log("NavController works");


var userFactory = UserFactory;

var signOut = userFactory.signOut();
var checkUserStatus = userFactory.checkUserStatus();



$scope.isLoggedIn = false;

$scope.logOff = function(){
  signOut();
}


$scope.auth = AuthFactory;

$scope.auth.$onAuthStateChanged(function(user) {
  $scope.user = user;

  // console.log(user); //change the path here
});








$scope.getUserData = function(){
  checkUserStatus();
  // console.log(checkUserStatus());

  if(checkUserStatus() == !null){
    $scope.isLoggedIn = true;
  } else {
    $scope.isLoggedIn = false;
  };

}


}]);
