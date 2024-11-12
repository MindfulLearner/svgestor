This is library for auto generate svg component from svg file.

first step: basic svg component with basic interface
- showing basic usage

# INSTALLATION
```pnpm install```

dependencies:
- [SVGO](https://github.com/svg/svgo) only svg to react comp. A dependency that will be used to optimize the svg code.
```pnpm install svgo```
- [TailwindCSS](https://tailwindcss.com/) for interface styling
```pnpm install tailwindcss```
- [Rollup](https://rollupjs.org/guide/en/) for building the library
```pnpm install rollup```

- ?? [fs/promise](https://nodejs.org/api/fs.html) for reading the svg file ???


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


i've been following tutorial by Yan Sun to build my library, [tutorial](https://blog.logrocket.com/how-to-build-component-library-react-typescript/#setting-up-development-environment)