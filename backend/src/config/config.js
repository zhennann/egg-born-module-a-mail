// eslint-disable-next-line
module.exports = appInfo => {
  const config = {};

  // middlewares
  config.middlewares = {
    mail: {
      global: false,
      dependencies: 'instance',
    },
  };

  // scenes
  config.scenes = {
    system: {
      transport: {
        host: '',
        port: 0,
        secure: false,
        auth: {
          user: '',
          pass: '',
        },
        logger: false,
        debug: false,
      },
      defaults: {
        from: '',
      },
    },
  };

  return config;
};
