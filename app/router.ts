import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;

  router.get('/api/login', controller.login.index);

  // CURD
  app.post('user_create', '/api/v1/users', jwt, controller.users.create);
  app.put('user_update', '/api/v1/users/:id', jwt, controller.users.update);
  app.delete('user_delete', '/api/v1/users/:id', jwt, controller.users.delete);
  app.get('user_retrieve', '/api/v1/users/:id', jwt, controller.users.retrieve);
  app.get('user_retrieveAll', '/api/v1/users', jwt, controller.users.index);
};
