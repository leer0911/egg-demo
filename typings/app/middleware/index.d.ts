// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuthUser from '../../../app/middleware/auth_user';
import ExportErrorHandler from '../../../app/middleware/error_handler';
import ExportErrorPage from '../../../app/middleware/error_page';
import ExportTokenRequired from '../../../app/middleware/token_required';

declare module 'egg' {
  interface IMiddleware {
    authUser: typeof ExportAuthUser;
    errorHandler: typeof ExportErrorHandler;
    errorPage: typeof ExportErrorPage;
    tokenRequired: typeof ExportTokenRequired;
  }
}
