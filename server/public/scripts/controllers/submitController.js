myApp.controller("SubmitController", ["$scope", "$location", "ArtFactory", "Upload", "$firebaseObject", function($scope, $location, ArtFactory, Upload, $firebaseObject) {
  console.log("SubmitController works");

  var ref = new Firebase("https://mplsgallery.firebaseio.com");
  var artistsRef = ref.child('artists');
  $scope.artistsData = $firebaseObject(artistsRef);
  console.log($scope.artistsData);









  $scope.artFactory = ArtFactory;

  $scope.artistArray = [];
  $scope.artistInfo = {};
  $scope.galleryArray = [];
  $scope.galleryInfo = {};

  // $scope.artistPhoto =

//============SEND GALLERY OBJECT TO FACTORY=======
    $scope.submitGallery = function() {
          $scope.artFactory.submitGallery($scope.galleryInfo).then(function() {
            $scope.galleryItem = $scope.artFactory.galleryData();
            console.log('SUCCESS!');
            console.log('this was sent back:', $scope.galleryItem);
            $scope.galleryInfo = {};
            $scope.galleryForm.$setUntouched();
            $scope.galleryForm.$setPristine();
                            })};


//============SEND ARTIST OBJECT TO FACTORY=======
      $scope.addArtist = function() {
            $scope.artFactory.addArtist($scope.artistInfo).then(function(response) {   //path error here TODO
              $scope.artist = $scope.artFactory.artistData();
              console.log('SUCCESS!');
              console.log('this was sent back:', $scope.artist)
              $scope.artistInfo = {};
              $scope.artistForm.$setUntouched();
              $scope.artistForm.$setPristine();
                // $scope.artistPhoto = $scope.artist.imgUrl;
                              })};



}]);
