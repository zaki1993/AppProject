app.controller('ContactCtrl', function($scope, $location, auth, identity,notifier) {
    $scope.contact = function(success) {
            notifier.success("Message send..");
        }
});