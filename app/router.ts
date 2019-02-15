import { Application } from 'egg';
import api from './router/api';
import web from './router/web';

export default (app: Application) => {
  api(app);
  web(app);
};
