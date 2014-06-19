app.controller('ProfileCtrl', function($scope, identity, auth) {
    $scope.user = {
        fistName: identity.currentUser.fistName,
        lastName: identity.currentUser.lastName
        },
        $scope.update = function(user){
            auth.update(user).then(function(){
                $scope.firstName = user.firstName;
                $scope.lastName = user.lastName;
                $location.path('/');
            });
        }
});