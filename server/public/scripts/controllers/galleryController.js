myApp.controller("GalleryController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("GalleryController works");



  var ref = new Firebase("https://mplsgallery.firebaseio.com");
  var artistsRef = ref.child('artists');

  artistsRef.orderByChild('name').on('child_added', function(snapshot){
    console.log('here');
    // console.log(snapshot.val());
    var id = snapshot.key();
    // console.log(id);

    var galleryRef = ref.child('/artists/' + id + '/gallery');
    galleryRef.on('child_added', function(snapshot){
      console.log('child added');
      var galleryId = snapshot.key();
      var galleryObject = snapshot.val();
      console.log('galleryObject URL:', galleryObject);
      $scope.galleryItems.push(galleryObject);
      console.log($scope.galleryItems);


    // var galleryInfo = ref.child('/artists/' + id + '/gallery' + galleryId);
    //   artistsRef.on('child_added', function(snapshot){
    //   var imgUrl = galleryInfo.imgUrl;
      // console.log(snapshot.val());
      // });
    });
});

$scope.galleryItems = [];


    // artistsRef.orderByChild('name').on('child_added', function(snapshot){
    //   // console.log(snapshot.val());
    //   var id = snapshot.key();
    //   var artistName = snapshot.val().name;
    //   $scope.artistForList = {
    //     name: artistName,
    //     id: id,
    //   };
    //   $scope.artistNameArray.push($scope.artistForList);

// });


  // $scope.galleryItems = [];
  // console.log('this is the galleryItems Array:', $scope.galleryItems);
  // console.log($scope.galleryItems);



  }]);

// var galleryRef = ref.child('/artists/' + $scope.galleryItem.artistId + '/gallery')






      // var loadImages = function(){
      //         return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK");
      //     };
      //    imageService.loadImages().then(function(data){
      //         data.data.items.forEach(function(obj){
      //             var desc = obj.description,
      //                 width = desc.match(/width="(.*?)"/)[1],
      //                 height = desc.match(/height="(.*?)"/)[1];
      //
      //             obj.actualHeight  = height;
      //             obj.actualWidth = width;
      //         });
      //        $scope.pics = data.data.items;
      //     });
      //     $scope.refresh = function(){
      //         angularGridInstance.gallery.refresh();
      //     }



  // var elem = document.querySelector('.grid');
  // var msnry = new Masonry( elem, {
  //   // options
  //   itemSelector: '.grid-item',
  //   columnWidth: 200
  // });
  //
  // // element argument can be a selector string
  // //   for an individual element
  // var msnry = new Masonry( '.grid', {
  //   // options
  // });
