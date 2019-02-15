// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMail from '../../../app/service/mail';
import ExportTest from '../../../app/service/Test';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    mail: ExportMail;
    test: ExportTest;
    user: ExportUser;
  }
}
