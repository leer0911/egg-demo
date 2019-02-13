import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;

    const token = app.jwt.sign({}, app.config.jwt.secret, { expiresIn: '1h' });

    ctx.body = token;
  }
}
