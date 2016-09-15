myApp.controller("ArtistsController", ["$scope", "$http", "$location", "AuthFactory", function($scope, $http, $location, AuthFactory) {
  console.log("ArtistsController works");


  $scope.auth = AuthFactory;

  $scope.auth.$onAuthStateChanged(function(user) {
    $scope.user = user;

  //change the path here
  });

}]);
