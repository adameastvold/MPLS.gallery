myApp.controller("ArtistsController", ["$scope", "$http", "$location", "AuthFactory", "GalleryFactory", function($scope, $http, $location, AuthFactory, GalleryFactory) {
  console.log("ArtistsController works");


  var artistArrayGet = GalleryFactory.artistArray();
  var getArtistObj = GalleryFactory.galleryData();
  $scope.currentPhotoIndex = 0;
  $scope.currentPhotoArray = [];

  $scope.imgClicked = false;

  $scope.artistLink = false;
  $scope.currentArtistIndex = 0;


  artistArrayGet().then(function(artistItems){
    console.log('artist items from promise', artistItems);
    $scope.artistArray = artistItems;
  });



  // getArtistObj().then(function(galleryItems){
  //   console.log('items from promise', galleryItems);
  //   $scope.artistItems = galleryItems;
  // });






  $scope.selectArtist = function(index){
    console.log('this is the selected artist:', index);
    $scope.currentArtistIndex = index;
    $scope.artistLink = true;
    $scope.currentArtist = $scope.artistArray;
    console.log('this is your currentArtist:', $scope.currentArtist[$scope.currentArtistIndex].gallery);

    $scope.currentArtistGallery = $scope.currentArtist[$scope.currentArtistIndex].gallery;
  }





  $scope.imgEnlarge = function(index){

    console.log(index);
    $scope.currentPhotoIndex = index;

    $scope.imgClicked = true;
    $scope.currentGallery = $scope.artistArray;
    $scope.currentPhoto = $scope.currentGallery[$scope.currentArtistIndex].gallery;

    $scope.currentPhotoArray.push($scope.currentPhoto);
        console.log('this is the currentPhotoArray:', $scope.currentPhoto.galleryUrl);
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
