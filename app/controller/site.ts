import { Controller } from 'egg';

export default class SiteController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('index', {
      data: { user: ctx.user, isLogin: ctx.isAuthenticated() },
    });
  }
}
