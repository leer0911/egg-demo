import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549871989598_4630';

  // add your egg config in here
  config.middleware = [];

  // 是否允许直接注册（否则只能走 github 的方式）
  config.session_secret = 'node_test_secret'; // 务必修改
  config.allow_sign_up = true;
  config.auth_cookie_name = 'node_test';
  config.admins = {
    ADMIN_USER: true,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    mongoose: {
      client: {
        url: 'mongodb://127.0.0.1/tree',
        options: {},
      },
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    passportGithub: {
      key: '54ca4c29052eb7db8f53',
      secret: 'c277a0bca817f564fbcab994dcf4062891af2498',
    },
    passportLocal: {
      usernameField: 'name',
      passwordField: 'pass',
    },
    view: {
      defaultViewEngine: 'ejs',
      mapping: {
        '.html': 'ejs',
      },
    },
    ejs: {
      layout: 'layout.html',
    },
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
