import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }
};

export default plugin;
