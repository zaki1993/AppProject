app.controller('InfoCtrl', function($scope, $location, auth, identity) {
    $scope.user = {
        username: identity.currentUser.username
    };
    $scope.contactUs = function(user) {
        auth.contactUs(user).then(function() {
            $scope.username = user.username;
            $location.path('/');
        });
    }
});