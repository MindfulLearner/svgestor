<div style="display: flex; justify-content: center;" align="center">
  <img src="https://github.com/user-attachments/assets/20d04a80-a585-47f9-b68b-7736e2350ee8" alt="image" style="width: 50%; max-width: 300px;">
</div>

---

<div style="display: flex; justify-content: center;" align="center">
  <a href="https://www.npmjs.com/package/npm">
    <img src="https://img.shields.io/badge/npm-v10.8.3-blue" alt="npm">
  </a>
  <a href="https://www.npmjs.com/package/svgo">
    <img src="https://img.shields.io/badge/SVGO-v3.3.2-brightgreen" alt="SVGO">
  </a>
  <a href="https://www.npmjs.com/package/typescript">
    <img src="https://img.shields.io/badge/TypeScript-v5.6.3-blue" alt="TypeScript">
  </a>
</div>


---

This SVG management library is made for SVG handling in your projects. 
The library provides a preset customisation of your Svg components.




## INSTALLATION

``pnpm install``

dependencies:

- [SVGO](https://github.com/svg/svgo) only svg to react comp. A dependency that will be used to optimize the svg code.
  for fs/promises too /
  ``npm install --save-dev @types/node``
  ``pnpm install svgo``
- [TailwindCSS](https://tailwindcss.com/) for interface styling
  ``pnpm install tailwindcss``
- [Rollup](https://rollupjs.org/guide/en/) for building the library
  ``pnpm install rollup``
- ?? [fs/promise](https://nodejs.org/api/fs.html) for reading the svg file ???
  `pnpm add -D @types/node`

to run rollup use `pnpm rollup -c --bundleConfigAsCjs` 

---

# LOGIC BASIC

**Introduction**: Our objective is to create a component that will manage .svg files.
To make it we need to follow these steps:

**For now ignore the where is the component code, under the hood will be modified, so you dont need to worry about it. Just focus on the interface and the properties of the interface.**

1. Import the svg file in the project `import GmailSvg from './assets/gmail.svg' it will generate a new component` generate a name for it `<ItemGmailSvg />`, and it will look like this behind the scene:

```tsx
import React from "react";
import { // name of the interface } from //there will be interface path;

const ItemGmailSvg: React.FC<BasicSvgInterface> = ({ //there will be interface props  }) => {
  return (
    <svg
   // inside there will be interface props
    >
      <path
      // inside there will be svg code
        fill={fill}
      />
    </svg>
  );
};

export default ItemGmailSvg;
```

2. Sanitize the svg code by removing redoundance and optimize the svg code taken from the import `the dependency SVGO will automatically remove the redoundance and optimize the svg code taken from the import, but still need to define the interface!`
   Our base interface will be like this:

```tsx
/**
 * interface that will define the props of the svg components
 */
interface BasicSvgInterface {
  width: string;
  height: string;
  fill: string;
}
```

3. Then when we want to use the component `<ItemGmailSvg />` we need to define the interface `behind the scene it will define the component to have the interface we choose, it will give errors if we dont put the interface`

```tsx
<ItemGmailSvg interface={BasicSvgInterface} />
```

4. Define the properties of the interface `We will be using tailwindcss to define the style, in our case width, height, fill, leaving the style empty will give errors`

```tsx
<ItemGmailSvg 
      interface={{
        basicSvgInterface: {
          width: '100px', 
          height: '100px', 
          fill: 'red' 
        }
      }} 
/>
```

5. If everything is correct the component will be like this:

```tsx
import React from "react";
import { BasicSvgInterface } from "../../../interfaces/svgInterface";

const ItemGmailSvg: React.FC<BasicSvgInterface> = ({ fill, width, height, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      style={style}
    >
      <path
        d="M30.996 7.824v17.382a2.044 2.044 0 0 1-2.044 2.044H24.179V15.663L16 21.799l-8.179-6.136v11.588H3.049a2.044 2.044 0 0 1-2.044-2.044V7.824A3.067 3.067 0 0 1 5.92 5.376l-.008-.006L16 12.937 26.088 5.37a3.067 3.067 0 0 1 4.907 2.454z"
        fill={fill}
      />
    </svg>
  );
};

export default ItemGmailSvg;
```

**Take note that the user is not going to touch the component, the user will only define the interface and the properties of the interface.**

# DESIGN PATTERN TO USE?

- factory pattern
- Decorator pattern

---

# Interface example

```tsx
/**
 * interface that will define the props of the svg components
 */
export interface BasicSvgInterface {
  width: string;
  height: string;
  fill: string;
}
```

# svg component example

```tsx
import //selected interface from the component
// example when i choose basicSvgInterface it will appear the interface there
// import { BasicSvgInterface } from './NormalSvgInterfaces';

const SvgComponent: React.FC<interface...> = ({ interface... }) => {
  return (
      // insert there svg code
  );
};

export default SvgComponent;
```

If you want other Overview check this issue [Issue #1 Svgestor Overview](https://github.com/MindfulLearner/svgestor/issues/1)


i've been following tutorial by Yan Sun to build my library, [tutorial](https://blog.logrocket.com/how-to-build-component-library-react-typescript/#setting-up-development-environment)
