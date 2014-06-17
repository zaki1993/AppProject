app.controller('UserListCtrl',function($scope, UsersResource){
$scope.user = UsersResource.query();
});