const config = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'preset-default',
    {
      name: 'removeComments',
    },
    {
      name: 'prefixIds',
      params: { prefix: 'icon' },
    },
  ],
};

export default config;
