var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
    development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/project',
    port: process.env.PORT || 1234
    },
    production:{
        rootPath: rootPath,
        db: 'mongodb://zaki1993:14eiuqhwdyeuq@ds031339.mongolab.com:31339/project',
        port: process.env.PORT || 1234
    }
};