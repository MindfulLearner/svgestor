export default {
  plugins: [
    // Rimuove gli attributi inutili
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'fill', 
          'clip-rule',
          'fill-rule',
        ],
      },
    },
    // Aggiunge un wrapper per rendere lo stile e gli attributi dinamici in React
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          'width="{width}"',
          'height="{height}"',
        ],
      },
    },
    {
      name: 'addClassesToSVGElement',
      params: {
        attributes: [
          'class="{fill}"',
        ],
      },
    },
    // Ottimizza la struttura dell'SVG
    {
      name: 'mergePaths', // Unisce i percorsi per semplificare
    },
    {
      name: 'removeDimensions', // Rimuove le dimensioni statiche
    },
  ],
};