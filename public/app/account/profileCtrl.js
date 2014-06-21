app.controller('ProfileCtrl', function($scope, $location, auth, identity) {
    $scope.user = {
        firstName: identity.currentUser.firstName,
        lastName: identity.currentUser.lastName,
        role: identity.currentUser.roles
    }

    $scope.update = function(user) {
        auth.update(user).then(function() {
            $scope.firstName = user.firstName;
            $scope.lastName = user.lastName;
            $scope.roles = user.role;
            $location.path('/');
            console.log($scope.roles = user.role);
        });
    }
});