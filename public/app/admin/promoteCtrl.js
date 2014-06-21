app.controller('PromoteCtrl', function($scope, $location, auth, identity, notifier) {
    $scope.user = {
        firstName: identity.currentUser.firstName,
        lastName: identity.currentUser.lastName,
        role: identity.currentUser.roles
    }

    $scope.promote = function(user) {
        auth.promote(user).then(function() {
            $scope.firstName = user.firstName;
            $scope.lastName = user.lastName;
            $scope.roles = user.role;
            notifier.success('Successfully promoted...');
        });
    }
});