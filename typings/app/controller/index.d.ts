// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/controller/login';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    login: ExportLogin;
    users: ExportUsers;
  }
}
