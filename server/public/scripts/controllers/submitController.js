myApp.controller("SubmitController", ["$scope", "$location", "ImageFactory", function($scope, $location, ImageFactory) {
  console.log("SubmitController works");

  $scope.imageFactory = ImageFactory;

  $scope.artistArray = [];
  $scope.artistInfo = {};
  $scope.galleryArray = [];
  $scope.galleryInfo = {};



//============STORES ARTIST INFO==========
  $scope.submitArtist = function() {

        $scope.artistArray.push($scope.artistInfo);
        $scope.artistInfo = {};

        console.log($scope.artistArray);

    };

//============STORES GALLERY INFO=========
    $scope.submitGallery = function() {

          $scope.galleryArray.push($scope.galleryInfo);
          $scope.galleryInfo = {};

          console.log($scope.galleryArray);

      };


//============SEND OBJECT TO FACTORY=======
      $scope.addArtist = function() {
            console.log('adding an artist....');
            $scope.imageFactory.addName($scope.artistInfo.name).then(function(response) {
              // $scope.people = $scope.dataFactory.peopleData();
              console.log('SUCCESS!');
            });
          };


}]);
