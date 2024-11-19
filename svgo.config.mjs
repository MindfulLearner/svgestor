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
    {
      name: 'convertPathData',
      active: true,
    },
    {
      name: 'mergePaths',
      active: true,
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke|style)',
      },
    },
    {
      name: 'removeDimensions',
      active: true,
    },
  ],
};

export default config;