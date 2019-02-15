import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },
  passportLocal: {
    enable: true,
    package: 'egg-passport-local',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
};

export default plugin;
