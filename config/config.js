var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'drag-race-web-app'
    },
    port: 3000,
    db: 'mongodb://localhost/drag-race-web-app-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'drag-race-web-app'
    },
    port: 3000,
    db: 'mongodb://localhost/drag-race-web-app-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'drag-race-web-app'
    },
    port: 3000,
    db: 'mongodb://localhost/drag-race-web-app-production'
  }
};

module.exports = config[env];
