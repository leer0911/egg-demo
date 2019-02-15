import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const { site, sign } = controller;
  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureMessage: '失败了',
    failWithError: true,
    failureFlash: 'aaa',
    passReqToCallback: true,
  });

  router.get('/', site.index);
  router.get('/signin', sign.showLogin); // 进入登录页面
  router.all('/signout', sign.signout); // 登出
  router.post('/passport/local', localStrategy);

  // sign controller
  router.get('/usersignup', sign.showSignup);
  router.post('/signup', sign.signup);

  // github oauth
  app.passport.mount('github');
};
