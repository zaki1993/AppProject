var app = angular.module('app',['ngResource','ngRoute']).value('toastr',toastr);
app.config(function($routeProvider, $locationProvider){
$locationProvider.html5Mode(true);
    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth){
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function(auth){
                return auth.isAuthorizedForRole();
            }
        }
    };
    $routeProvider
        .when('/',{
        templateUrl: '/partials/home',
        controller: 'MainCtrl'
    })
        .when('/signup',{
            templateUrl: '/partials/signup',
            controller: 'SignUpCtrl'
        })
        .when('/profile',{
            templateUrl: 'partials/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users',{
            templateUrl: '/partial/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        });
});
app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError',function(event,current,previous,rejection){
   if(rejection === 'not authorized'){
       $location.path('/');
   }
    });
});