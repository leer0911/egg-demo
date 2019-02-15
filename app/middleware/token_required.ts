import { Context } from 'egg';

export default () => {
  return async function tokenRequired(ctx: Context, next): Promise<void> {
    let token = '';
    const authorization = ctx.headers.authorization;

    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      token = authorization.split(' ')[1];
    } else if (ctx.query.accesstoken) {
      token = ctx.query.accesstoken;
    } else if (ctx.request.body.accesstoken) {
      token = ctx.request.body.accesstoken;
    }

    const user = await ctx.service.user.getUserByToken(token);

    if (!user) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        error_msg: '错误的 accessToken',
      };
      return;
    }

    if (user.is_block) {
      ctx.status = 403;
      ctx.body = {
        success: false,
        error_msg: '您的账户被禁用',
      };
      return;
    }

    // ctx.request.user = user;

    await next();
  };
};
