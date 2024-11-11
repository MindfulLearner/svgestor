This is library for auto generate svg component from svg file.

first step: basic svg component with basic interface
- showing basic usage

dependencies:
- [SVGO](https://github.com/svg/svgo) only svg to react comp. A dependency that will be used to optimize the svg code.
- [TailwindCSS](https://tailwindcss.com/) for interface styling


---
# LOGIC BASIC
**Introduction**: Our objective is to create a component that will manage .svg files.
To make it we need to follow these steps:

1. Import the svg file in the project `import GmailSvg from './assets/gmail.svg' it will generate a new component behind the scene` it will look like this:
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

2. Transform the svg code to react component `it is incomplete with the dependency SVGO it will automatically remove the redoundance and optimize the svg code taken from the import, but still need to define the interface`
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

3. When we write the component `<SvgGmailComponent />` we need to define the interface `behind the scene it will definethe component to have the interface that we choose it will give errors if we dont put the interface`
```tsx
<SvgGmailComponent interface={BasicSvgInterface} />
```

4. Define the properties of the interface `width, height, fill we will be using tailwindcss to define the style`
```tsx
<SvgGmailComponent 
      interface={{
        basicSvgInterface: {
          width: '100px', 
          height: '100px', 
          fill: 'red' 
        }
      }} 
/>
```

5. In the end the component will be in behind the scene modified like this
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


# DESIGN PATTERN TO USE
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


i've been following tutorial by Alex Eagleson to build my library, [tutorial](https://www.youtube.com/watch?v=c6eP0LKzGrQe)
this one will be needed to give the user the ability to use the component by importing it from the library.