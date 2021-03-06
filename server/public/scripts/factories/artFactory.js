myApp.factory('ArtFactory', ['$http', 'Upload', function($http, Upload) {

  var artistObject = undefined;
  var artists = undefined;

  var galleryObject = undefined;
  var galleryItems = undefined;

  var imgUrls = [];


//=========SENDS ARTIST OBJECT & FILE TO ROUTES===========
  var addArtist = function(artist) {
    artistObject = undefined;
    artistObject = artist;
    var promise = Upload.upload({
                        url: '/submissions',
                        data: {
                          file: artist.aboutImage
                        }
                      })
                      .then(function (response) {
                              // console.log('clientside receiving:', response.data);
                              imgUrls.push(response.data.url);
                              artistObject.imgUrl = response.data.url;
                              artistObject.imgHeight = response.data.height;
                              artistObject.imgWidth = response.data.width;
                            });

                            // console.log('this is in the factory:', artist);

      //
      //
      // var promise = $http.post('/submissions', artist).then(function(response) {
      //   console.log('post completed');
      //
      // });
      // console.log('imgUrls array:', imgUrls);
      return promise;
    }


//=========SENDS GALLERY OBJECT & FILE TO ROUTES===========
    var submitGallery = function(galleryItem) {
    galleryObject = undefined;
    galleryObject = galleryItem;
    var promise = Upload.upload({
                          url: '/submissions',
                          data: {
                            file: galleryItem.photo
                          }
                        })
                        .then(function (response) {
                                // console.log('clientside receiving:', response.data);
                                imgUrls.push(response.data.url);
                                galleryObject.imgUrl = response.data.url;
                                galleryObject.imgHeight = response.data.height;
                                galleryObject.imgWidth = response.data.width;
                              });

                              // console.log('this is in the factory:', galleryItem);



        // var promise = $http.post('/submissions/', galleryItem).then(function(response) {
        //   console.log('post completed');
        //
        // });
        // console.log('imgUrls array:', imgUrls);
        return promise;
      }



    return {
      artistData: function() {
        return artistObject;
      },
      addArtist: function(artist) {
        return addArtist(artist);
      },
      galleryData: function() {
        return galleryObject;
      },
      submitGallery: function(galleryItem){
        return submitGallery(galleryItem);
      }
    };
}]);
