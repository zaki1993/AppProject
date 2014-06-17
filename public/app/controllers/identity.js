app.factory('identity',function($window, UsersResource){
    var user;
    if($window.bootstrappedUserObject){
        user = new UsersResource();
        angular.extend(user,response.user);
    }
    return{
        currentUser: user,
        isAuthenticated: function () {
            return !!this.currentUser;
        },
        isAuthorizedForRole: function (role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});