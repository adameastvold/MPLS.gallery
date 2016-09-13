myApp.controller("GalleryController", ["$scope", "$http", "$location", 'GalleryFactory', function($scope, $http, $location, GalleryFactory) {
  console.log("GalleryController works");


  var test = GalleryFactory.galleryData();

  test().then(function(galleryItems){
    console.log('items from promise', galleryItems);
    $scope.galleryItems = galleryItems;
  });


  }]);
