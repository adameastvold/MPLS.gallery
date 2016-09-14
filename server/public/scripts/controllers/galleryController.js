myApp.controller("GalleryController", ["$scope", "$http", "$location", 'GalleryFactory', 'angularGridInstance', function($scope, $http, $location, GalleryFactory, angularGridInstance) {
  console.log("GalleryController works");


  var test = GalleryFactory.galleryData();

  test().then(function(galleryItems){
    console.log('items from promise', galleryItems);
    $scope.galleryItems = galleryItems;
  });


  }]);
