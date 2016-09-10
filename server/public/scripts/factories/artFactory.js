myApp.factory('ArtFactory', ['$http', function($http) {

  var artist = undefined;
  var artists = undefined;

  var addArtist = function(artist) {
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

 //     var submit = function(){
 //       Artist.upload({
 //         url: '/uploads',
 //         method: 'post',
 //         data: artists
 //       }).then(function (response) {
 //         console.log(response.data);
 //         artists.push(response.data);
 //         artist = {};
 //       })
 // }


    return {
      artistData: function() {
        return artist;
      },
      addArtist: function(artist) {
        return addArtist(artist);
      }
      };
}]);
