app.controller('SignUpCtrl',function($scope, $location, auth){
$scope.signUp = function(user){
    auth.signUp(user).then(function(){
          notifier.success("Registration successful!");
        $location.path('/');
    });
    }
});