myApp.controller("SubmitController", ["$scope", "$location", "ArtFactory", "Upload", function($scope, $location, ArtFactory, Upload) {
  console.log("SubmitController works");

  $scope.artFactory = ArtFactory;

  $scope.artistArray = [];
  $scope.artistInfo = {};
  $scope.galleryArray = [];
  $scope.galleryInfo = {};



//============STORES ARTIST INFO==========
  // $scope.submitArtist = function() {
  //
  //       $scope.artistArray.push($scope.artistInfo);
  //       $scope.artistInfo = {};
  //
  //       console.log($scope.artistArray);
  //
  //   };

//============STORES GALLERY INFO=========
    $scope.submitGallery = function() {

          $scope.galleryArray.push($scope.galleryInfo);
          $scope.galleryInfo = {};

          console.log($scope.galleryArray);

      };


//============SEND OBJECT TO FACTORY=======
      $scope.addArtist = function() {
            console.log('adding an artist....', $scope.artistInfo.aboutImage);
            $scope.artFactory.addArtist($scope.artistInfo).then(function(response) {
              $scope.artist = $scope.artFactory.artistData();
              console.log('SUCCESS!');
                              })};



          // Upload.upload({
          //             url: '/uploads',
          //             data: {
          //                 file: file,
          //                 'user': $scope.user,
          //                 'comment': $scope.comment
          //             }

          //     $scope.submit = function(){
          //       Upload.upload({
          //         url: '/uploads',
          //         method: 'post',
          //         data: $scope.upload
          //       }).then(function (response) {
          //         console.log(response.data);
          //         $scope.uploads.push(response.data);
          //         $scope.upload = {};
          //       })
          // }

}]);
