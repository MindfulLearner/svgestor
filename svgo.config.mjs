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
      name: 'convertPathData', // Assicura la semplificazione dei percorsi
    },
    {
      name: 'mergePaths', // Unisce percorsi contigui
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill)', // Rimuove attributi statici per impostare `fill={fill}`
      },
    },
  ],
};

export default config;
