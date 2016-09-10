myApp.factory('ArtFactory', ['$http', 'Upload', function($http, Upload) {

  var artist = undefined;
  var artists = undefined;

  var addArtist = function(artist) {
    console.log('file?:', artist.aboutImage);
    Upload.upload({
                        url: '/submissions',
                        data: {
                          file: artist.aboutImage
                        }
                      }).then(function (response) {
                              console.log('new:', response.data);
                            });


    console.log('this is in the factory:', artist);
      var promise = $http.post('/submissions', artist).then(function(response) {
        console.log('post completed');

      });

      return promise;
    }


    $http.get('/submissions').then(function(response){
       artists = response.data;
       console.log('this is the artists array:', artists);
     });


    return {
      artistData: function() {
        return artist;
      },
      addArtist: function(artist) {
        return addArtist(artist);
      }
      };
}]);
