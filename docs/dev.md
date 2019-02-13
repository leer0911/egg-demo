## CURD

- 下载 [MongoDB](https://www.mongodb.com/download-center/community)

- 安装 [egg-mongoose](https://github.com/eggjs/egg-mongoose)

- 配置 `/config/config.default.ts`

```ts
// add your special config in here
const bizConfig = {
  mongoose: {
    client: {
      url: 'mongodb://127.0.0.1/tree',
      options: {},
    },
  },
};
```

- 配置 `/config/plugin.ts`

```ts
const plugin: EggPlugin = {
  // static: true,
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },
};
```

## JWT

- 安装 [egg-jwt](https://github.com/okoala/egg-jwt)

- 配置 `/config/config.default.ts`

```ts
// add your special config in here
const bizConfig = {
  jwt: {
    secret: '123456',
  },
};
```

- 配置 `/config/plugin.ts`

```ts
const plugin: EggPlugin = {
  // static: true,
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
```

### test

```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDk5NjQ5OTcsImV4cCI6MTU0OTk2ODU5N30.lHLTS43BNVSzlBgzsr2miZWr5vwBMMwTvH4hSJ6zXnE" http://127.0.0.1:7001/api/v1/users

curl http://127.0.0.1:7001/api/v1/users
```
