myApp.controller("GalleryController", ["$scope", "$http", "$location", 'GalleryFactory', 'AuthFactory', function($scope, $http, $location, GalleryFactory, AuthFactory) {
  console.log("GalleryController works");



  var test = GalleryFactory.galleryData();

  test().then(function(galleryItems){
    console.log('items from promise', galleryItems);
    $scope.galleryItems = galleryItems;
  });


  $scope.auth = AuthFactory;

  $scope.auth.$onAuthStateChanged(function(user) {
    $scope.user = user;

  //change the path here
  });

  }]);
