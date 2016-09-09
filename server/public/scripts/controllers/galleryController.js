myApp.controller("GalleryController", ["$scope", "$http", "$location", function($scope, $http, $location) {
  console.log("GalleryController works");


  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 200
  });

  // element argument can be a selector string
  //   for an individual element
  var msnry = new Masonry( '.grid', {
    // options
  });




}]);
