myApp.factory('GalleryFactory', ['$http', '$q', function($http, $q) {




  function getArtist(){

      var artistArray = [];

    var artistPromise = $q(function(resolve, reject) {

          var ref = new Firebase("https://mplsgallery.firebaseio.com");
          var artistsRef = ref.child('artists');

    artistsRef.on('value', function(snapshot){
    console.log(snapshot.val());
    snapshot.forEach(function(artist){
        artistArray.push(artist.val());

      });
        resolve(artistArray);
      });
    });
    return artistPromise;
}












  function coolFunc(){

    var galleryPromise = $q(function(resolve, reject) {

      var galleryTemp = [];

      var ref = new Firebase("https://mplsgallery.firebaseio.com");
      var artistsRef = ref.child('artists');


      artistsRef.on('value', function(snapshot){
      console.log(snapshot.val());
      snapshot.forEach(function(artist){

        var artistName = artist.val().name;
        var artistDesc = artist.val().description;
        var artistEmail = artist.val().email;
        var artistImage = artist.val().aboutImage;
        artist.forEach(function(gallery){
          if(gallery.key() ==  'gallery'){
            // console.log('this is gallery value:', gallery.key());
            gallery.forEach(function(imgUrl){

              console.log('this is the object being received in factory:', imgUrl.val());
            galleryTemp.push({galleryObj: imgUrl.val(), artistName: artistName, artistDesc: artistDesc, artistEmail: artistEmail, artistImage: artistImage});
            });
          };
        })
      });
      resolve(galleryTemp);
    })
    });


  return galleryPromise;
  }





  return {
    galleryData: function() {
      return coolFunc;
    },
    test: function(){
      console.log('testing');
    },
    artistArray: function() {
      return getArtist;
    }
  };
}]);
