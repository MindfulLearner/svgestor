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