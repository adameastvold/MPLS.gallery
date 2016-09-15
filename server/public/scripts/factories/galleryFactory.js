myApp.factory('GalleryFactory', ['$http', '$q', function($http, $q) {



  function coolFunc(){
    console.log('function has started');

    var galleryPromise = $q(function(resolve, reject) {



      var galleryTemp = [];

      var ref = new Firebase("https://mplsgallery.firebaseio.com");
      var artistsRef = ref.child('artists');


      artistsRef.on('value', function(snapshot){
      console.log(snapshot.val());
      // var id = snapshot.key();
      // console.log(id);
      snapshot.forEach(function(artist){
        // console.log('this is the artist:', artist.val());
        // var artistName = artist.val().name;
        artist.forEach(function(gallery){
          if(gallery.key() ==  'gallery'){
            // console.log(gallery.val());
            gallery.forEach(function(imgUrl){
              // imgUrl.val().artist = artistName;
              console.log('this is the image url?:', imgUrl.val());
            galleryTemp.push(imgUrl.val());
          });

        };
        })
      });
      resolve(galleryTemp);
    })
    });


  return galleryPromise;
  }

//LOOK UP: RESOLVE, new PROMISE, set timeout, or error checking





  return {
    galleryData: function() {
      return coolFunc;
    },
    test: function(){
      console.log('testing');
    }
  };
}]);
