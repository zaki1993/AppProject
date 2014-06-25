var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider) {
    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('admin');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'MainCtrl'
        })
        .when('/courses', {
            templateUrl: '/partials/courses/courses-list',
            controller: 'CoursesListCtrl'
        })
        .when('/courses/:id', {
            templateUrl: '/partials/courses/course-details',
            controller: 'CourseDetailsCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        })
        .when('/admin/promote',{
            templateUrl: '/partials/admin/promote-user',
            controller: 'PromoteCtrl',
            resolve: routeUserChecks.adminRole
        })
        .when('/sudoku',{
            templateUrl: '/partials/main/sudoku',
            controller: 'Sudoku'
        })
        .when('/contact',{
            templateUrl: '/partials/account/Info',
            controller: 'ContactCtrl'
        })
        .when('/havefun',{
            templateUrl: 'partials/main/lets-fun'
        })
        .when('/drawsomething',{
            templateUrl: 'partials/main/drawsomething'
        });
    });
app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});