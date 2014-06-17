var app = angular.module('app',['ngResource','ngRoute']).value('toastr',toastr);
app.config(function($routeProvider, $locationProvider){
$locationProvider.html5Mode(true);
    var routeRoleChecks = {
        admin: {
            auth: function(auth){
                return auth.isAuthorizedForRole('admin');
            }
        }
    };
    $routeProvider
        .when('/',{
        templateUrl: '/partials/home',
        controller: 'MainCtrl'
    })
        .when('/admin/users',{
            templateUrl: '/partial/users-list',
            controller: 'UserListCtrl',
            resolve: routeRoleChecks.admin
        });
});
app.run(function($rootScope, $location){
    $rootScope.$on('$routeChangeError',function(event,current,previous,rejection){
   if(rejection === 'not authorized'){
       $location.path('/');
   }
    });
});