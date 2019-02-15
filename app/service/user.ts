import { Service } from 'egg';
import * as uuid from 'uuid';
import * as utility from 'utility';

/**
 * Test Service
 */
export default class Test extends Service {
  /*
   * 根据邮箱，查找用户
   * @param {String} email 邮箱地址
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  getUserByMail(email) {
    return this.ctx.model.User.findOne({ email }).exec();
  }

  /*
   * 根据登录名查找用户
   * @param {String} loginName 登录名
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  getUserByLoginName(loginName) {
    const query = { loginname: new RegExp('^' + loginName + '$', 'i') };
    return this.ctx.model.User.findOne(query).exec();
  }

  /*
   * 根据 token 查找用户
   * @param {String} token
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  public async getUserByToken(accessToken) {
    const query = { accessToken };
    return this.ctx.model.User.findOne(query).exec();
  }

  /*
   * 根据 githubId 查找用户
   * @param {String} githubId 登录名
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  public getUserByGithubId(githubId) {
    const query = { githubId };
    return this.ctx.model.User.findOne(query).exec();
  }

  /*
   * 根据用户ID，查找用户
   * @param {String} id 用户ID
   * @return {Promise[user]} 承载用户的 Promise 对象
   */
  public async getUserById(id) {
    if (!id) {
      return null;
    }

    return this.ctx.model.User.findOne({ _id: id }).exec();
  }

  /*
   * 根据关键字，获取一组用户
   * Callback:
   * - err, 数据库异常
   * - users, 用户列表
   * @param {String} query 关键字
   * @param {Object} opt 选项
   * @return {Promise[users]} 承载用户列表的 Promise 对象
   */
  getUsersByQuery(query, opt) {
    return this.ctx.model.User.find(query, '', opt).exec();
  }

  newAndSave(name, loginname, pass, email, avatar_url, active) {
    const user = new this.ctx.model.User();
    user.name = name;
    user.loginname = loginname;
    user.pass = pass;
    user.email = email;
    user.avatar = avatar_url;
    user.active = active || false;
    user.accessToken = uuid.v4();

    return user.save();
  }

  makeGravatar(email) {
    return (
      'http://www.gravatar.com/avatar/' +
      utility.md5(email.toLowerCase()) +
      '?size=48'
    );
  }
}
