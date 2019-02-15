import { Application } from 'egg';

export default (app: Application) => {
  const apiV1Router = app.router.namespace('/api/v1');
  const { controller, middleware } = app;
  const { users } = controller;
  const tokenRequired = middleware.tokenRequired();

  // CURD
  apiV1Router.post('/users', users.create);
  apiV1Router.put('/users/:id', users.update);
  apiV1Router.get('/users/:id', users.retrieve);
  apiV1Router.get('/users', tokenRequired, users.index);
  apiV1Router.delete('/users/:id', users.delete);
};
