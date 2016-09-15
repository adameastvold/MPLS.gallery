myApp.controller("ArtistsController", ["$scope", "$http", "$location", "AuthFactory", "GalleryFactory", function($scope, $http, $location, AuthFactory, GalleryFactory) {
  console.log("ArtistsController works");

  var getArtistObj = GalleryFactory.galleryData();
  $scope.currentPhotoIndex = 0;
  $scope.imgClicked = false;
  $scope.artistLink = 


  getArtistObj().then(function(galleryItems){
    console.log('items from promise', galleryItems);


    $scope.artistItems = galleryItems;
  });





  $scope.imgEnlarge = function(index){
    console.log(index);
    $scope.currentPhotoIndex = index;
    $scope.imgClicked = true;
    $scope.currentPhoto = $scope.artistItems;
    console.log($scope.currentPhoto[$scope.currentPhotoIndex].galleryUrl);

  };

  $scope.nextImage = function(){
   if ($scope.currentPhotoIndex == $scope.artistItems.length - 1){
      $scope.currentPhotoIndex = 0;
    } else {
      $scope.currentPhotoIndex++;
    };
  };

  $scope.prevImage = function(){
    if($scope.currentPhotoIndex == 0){
      $scope.currentPhotoIndex = $scope.artistItems.length - 1;
    } else {
      $scope.currentPhotoIndex--;
    };
  };

  $scope.closeWindow = function(){
    $scope.imgClicked = false;
  };







  $scope.auth = AuthFactory;

  $scope.auth.$onAuthStateChanged(function(user) {
    $scope.user = user;

  //change the path here
  });


}]);
