app.controller('ContactCtrl', function($scope, $location, notifier, identity, auth) {
    $scope.identity = identity;
    $scope.login = function(user) {
        auth.login(user).then(function (success) {
            if (success) {
                notifier.success('Successful login!');
            }
            else {
                notifier.error('Username/Password combination is not valid!');
            }
        });
    }
});