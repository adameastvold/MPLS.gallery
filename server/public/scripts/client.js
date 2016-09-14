var myApp = angular.module("myApp", ["ngRoute", "ngMaterial", "ngFileUpload", "firebase"]);
myApp.config(['$routeProvider', '$sceDelegateProvider', '$mdThemingProvider', function($routeProvider, $sceDelegateProvider, $mdThemingProvider) {

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
            controller: 'SubmitController',
            resolve: {
              'currentAuth': ['AuthFactory', function(AuthFactory){
                return AuthFactory.$requireSignIn();
              }]
            }
        })
        .when('/login', {
          templateUrl: '/views/partials/login.html',
          controller: 'LoginController'
        })
        .otherwise({
            redirectTo: 'gallery'
        });




    //     $sceDelegateProvider.resourceUrlWhitelist([
    //           'self',
    //           'http://res.cloudinary.com/beastprime/image/upload/**',
    //           'https://res.cloudinary.com/beastprime/image/upload/**'
    // ]);
  //
  //   myApp.config( [
  //     '$sceDelegateProvider',
  //     function($sceDelegateProvider)
  //     {
  //         $sceDelegateProvider.resourceUrlWhitelist(['self', 'https://res.cloudinary.com/beastprime/image/upload/**']);
  //     }
  // ]);
// }]);

          //
          // $mdThemingProvider.theme('default')
          // .dark();


}]);

myApp.run(['$rootScope', '$location', 'AuthFactory', redirectHome]);
 //  In combination with the route configuration, this redirects to
 //  the home view if user is not authenticated
 function redirectHome($rootScope, $location, AuthFactory) {
     $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
         if (error === 'AUTH_REQUIRED') {
             $location.path('/login');
         }
     });
}
