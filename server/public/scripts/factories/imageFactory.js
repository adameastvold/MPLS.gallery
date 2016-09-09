myApp.factory('ImageFactory', ['$http', function($http) {

  var artist = undefined;

  var addArtist = function(name) {
      var promise = $http.post('/submissions', {name: name}).then(function(response) {
        console.log('DF post completed');
        // done, now refresh out data
        // return getData();
      });

      return promise;
    }


    return {
        addName: function(name) {
          return addArtist(name);
        }
      };
}]);
