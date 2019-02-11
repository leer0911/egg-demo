import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async create() {
    const { ctx } = this;
    const user = new ctx.model.User(ctx.request.body);
    const savedUser = await user.save();
    ctx.body = savedUser;
    ctx.status = 201;
  }
  public async retrieve() {
    const { ctx } = this;
    const user = await ctx.model.User.findOne({ _id: ctx.params.id });
    if (!user) {
      ctx.throw(404);
    }
    ctx.body = user;
    ctx.status = 200;
  }
  public async update() {
    const { ctx } = this;
    const query = { _id: ctx.params.id };
    const update = { $set: ctx.request.body };
    const user = await ctx.model.User.findByIdAndUpdate(query, update);
    ctx.body = user;
    ctx.status = 204;
  }
  public async delete() {
    const { ctx } = this;
    const query = { _id: ctx.params.id };
    const user = await ctx.model.User.findOneAndDelete(query);
    ctx.body = user;
    ctx.status = 204;
  }
  public async index() {
    const { ctx } = this;
    const user = await ctx.model.User.find();
    if (!user) {
      ctx.throw(404);
    }
    ctx.body = user;
    ctx.status = 200;
  }
}
