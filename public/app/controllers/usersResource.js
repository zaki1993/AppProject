app.factory('UsersResource',function($resource){
    var UsersResource = $resource('/api/users/:id',{_id:'@id'},[
        Upgrade = {
        method: 'PUT',
        isArray: false
    }]);
    UsersResource.prototype.isAdmin = function(){
        return this.roles && this.roles.indexOf('admin') > -1;
    };
    return UsersResource;
});