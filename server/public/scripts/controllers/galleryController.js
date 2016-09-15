myApp.controller("GalleryController", ["$scope", "$http", "$location", 'GalleryFactory', 'AuthFactory', function($scope, $http, $location, GalleryFactory, AuthFactory) {
  console.log("GalleryController works");



  var getGalleryObj = GalleryFactory.galleryData();
  $scope.currentPhotoIndex = 0;
  $scope.imgClicked = false;



  getGalleryObj().then(function(galleryItems){
    console.log('items from promise', galleryItems);
    $scope.galleryItems = galleryItems;
  });


  $scope.auth = AuthFactory;

  $scope.auth.$onAuthStateChanged(function(user) {
    $scope.user = user;

  //change the path here
  });

  $scope.imgEnlarge = function(index){
    console.log(index);
    $scope.currentPhotoIndex = index;
    $scope.imgClicked = true;
    $scope.currentPhoto = $scope.galleryItems;
    console.log($scope.currentPhoto[$scope.currentPhotoIndex].galleryUrl);

  };

  $scope.nextImage = function(){
   if ($scope.currentPhotoIndex == $scope.galleryItems.length - 1){
      $scope.currentPhotoIndex = 0;
    } else {
      $scope.currentPhotoIndex++;
    };
  };

  $scope.prevImage = function(){
    if($scope.currentPhotoIndex == 0){
      $scope.currentPhotoIndex = $scope.galleryItems.length - 1;
    } else {
      $scope.currentPhotoIndex--;
    };
  };

  $scope.closeWindow = function(){
    $scope.imgClicked = false;
  };

  }]);
