myApp.controller("SubmitController", ["$scope", "$location", "ArtFactory", "Upload", function($scope, $location, ArtFactory, Upload) {
  console.log("SubmitController works");


  var ref = new Firebase("https://mplsgallery.firebaseio.com");
  var artistsRef = ref.child('artists');


//=========ADDING ARTISTS TO FIREBASE & DROP DOWN FOR GALLERY===========
  var sendArtistToFirebase = function(){
    var messageRef = artistsRef.push();
    messageRef.set({name: $scope.artist.name, email: $scope.artist.email, description: $scope.artist.description, aboutImage: $scope.artist.imgUrl, imgHeight: $scope.artist.imgHeight, imgWidth: $scope.artist.imgWidth});

  };

//this asks firebase to send me the artists id & object to store in my array
  $scope.fillList = function(){
    artistsRef.orderByChild('name').on('child_added', function(snapshot){
    // console.log(snapshot.val());
    var id = snapshot.key();
    var artistName = snapshot.val().name;
    $scope.artistForList = {
      name: artistName,
      id: id,
    };
    $scope.artistNameArray.push($scope.artistForList);  
    // console.log('this is your artist name array:', $scope.artistNameArray);

  });
};

  var sendGalleryToFirebase = function(){
    var galleryRef = ref.child('/artists/' + $scope.galleryItem.artistId + '/gallery');
    var messageRef = galleryRef.push();
    messageRef.set({title: $scope.galleryItem.title, medium: $scope.galleryItem.medium, galleryUrl: $scope.galleryItem.imgUrl, imgHeight: $scope.galleryItem.imgHeight, imgWidth: $scope.galleryItem.imgWidth});

  };


//The below array dynamically fills the drop down menu
  $scope.artistNameArray = [];



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
            // console.log('this was sent back:', $scope.galleryItem);
            sendGalleryToFirebase();
            $scope.galleryInfo = {};
            $scope.galleryForm.$setUntouched();
            $scope.galleryForm.$setPristine();
                            })};


//============SEND ARTIST OBJECT TO FACTORY=======
      $scope.addArtist = function() {
            $scope.artFactory.addArtist($scope.artistInfo).then(function(response) {
              $scope.artist = $scope.artFactory.artistData();
              console.log('SUCCESS!');
              // console.log('this was sent back:', $scope.artist)
              sendArtistToFirebase();
              $scope.artistInfo = {};
              $scope.artistForm.$setUntouched();
              $scope.artistForm.$setPristine();

                              })};



}]);
