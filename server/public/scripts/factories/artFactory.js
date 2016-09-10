myApp.factory('ArtFactory', ['$http', function($http) {

  var artist = undefined;

  var addArtist = function(artist) {
    console.log(artist);
      var promise = $http.post('/submissions', artist).then(function(response) {
        console.log(' post completed');


      });

      return promise;
    }


    return {
      artistData: function() {
        return artist;
      },
        addArtist: function(artist) {
          return addArtist(artist);
        }
      };
}]);
