myApp.controller("GalleryController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("GalleryController works");


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
      }]);




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
