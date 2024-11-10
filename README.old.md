This is library for auto generate svg component from svg file.

first step: basic svg component with basic interface
- showing basic usage

dependencies:
- [SVGO](https://github.com/svg/svgo) only svg to react comp. A dependency that will be used to optimize the svg code.
- [TailwindCSS](https://tailwindcss.com/) for interface styling


svg component example
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

// 1. when importing it will pass to svg-to-react-component and it will take the svg code then do his stuff by removing redoundance. then generate-component name so as "GmailSvgComponent" and insert the trasnformed code in // insert there svg code 

// 2. when we import first time the svg component in the project it will yes generate the svg code in the component but it will not generate the interface so we need to define what kind of interface we want to use then it the svg component will have the interface
```

Interface example
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

i've been following tutorial by Alex Eagleson to build my library, [tutorial](https://www.youtube.com/watch?v=c6eP0LKzGrQe)
this one will be needed to give the user the ability to use the component by importing it from the library.