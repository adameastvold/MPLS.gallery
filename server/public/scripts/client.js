var myApp = angular.module("myApp", ["ngRoute", "ngMaterial", "angularGrid", 'ngFileUpload']);
myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/gallery', {
            templateUrl: '/views/partials/gallery.html',
            controller: 'GalleryController'
        })
        .when('/artists', {
            templateUrl: '/views/partials/artists.html',
            controller: 'ArtistsController'
        })
        .when('/submit', {
            templateUrl: '/views/partials/submit.html',
            controller: 'SubmitController'
        })
        .otherwise({
            redirectTo: 'gallery'
        });
}]);
