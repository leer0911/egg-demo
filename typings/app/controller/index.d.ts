// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    users: ExportUsers;
  }
}
