app.controller('PromoteCtrl', function($scope, $location, auth, identity) {
    $scope.user = {
        username: identity.currentUser.username,
        roles: identity.currentUser.roles
    };
    $scope.promote = function(user) {
        auth.promote(user).then(function() {
            $scope.roles = user.roles;
            $location.path('/');
        });
    }
});