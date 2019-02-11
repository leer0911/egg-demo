import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  // CURD
  app.post('user_create', '/api/v1/users', controller.users.create);
  app.put('user_update', '/api/v1/users/:id', controller.users.update);
  app.get('user_retrieve', '/api/v1/users/:id', controller.users.retrieve);
  app.get('user_retrieveAll', '/api/v1/users', controller.users.index);
  app.delete('user_delete', '/api/v1/users/:id', controller.users.delete);
};
