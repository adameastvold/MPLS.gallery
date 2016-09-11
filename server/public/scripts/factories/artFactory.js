myApp.factory('ArtFactory', ['$http', 'Upload', function($http, Upload) {

  var artist = undefined;
  var artists = undefined;

  var imgUrls = [];

  var addArtist = function(artist) {
    Upload.upload({
                        url: '/submissions',
                        data: {
                          file: artist.aboutImage
                        }
                      })
                      .then(function (response) {
                              console.log('clientside receiving:', response.data.url);
                              imgUrls.push(response.data.url);
                            });

                            console.log('this is in the factory:', artist);



      var promise = $http.post('/submissions', artist).then(function(response) {
        console.log('post completed');

      });
console.log('imgUrls array:', imgUrls);
      return promise;
    }



//make separate post request to gather combined info with dynamic URL and artist info to send to MONGO

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
