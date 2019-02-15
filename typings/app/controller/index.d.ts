// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportSign from '../../../app/controller/sign';
import ExportSite from '../../../app/controller/site';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    sign: ExportSign;
    site: ExportSite;
    users: ExportUsers;
  }
}
