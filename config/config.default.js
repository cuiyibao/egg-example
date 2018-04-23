'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523260382408_9179';

  // add your config here
  config.errorHandler = {
    match: '/api',
  };
  //关闭csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    },
    // 白名单
    domainWhiteList: [ 'http://127.0.0.1:1332' ]
  };

  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };
  config.middleware = [];

  config.mongoose = {
    client: {
      url: 'mongodb://101.132.106.165/egg1',
      options: {},
    },
  }

  return config;
};
