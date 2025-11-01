import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-9h-1sUwt.js";import{C as a}from"./base-DN4I6t8L.js";import"./preload-helper-CnXRhx2_.js";function n({label:m,density:c,spacing:p,resetDefaults:l,children:u}){const g={};return(c!==void 0||l)&&(g["data-density"]=l?c||"default":c),(p!==void 0||l)&&(g["data-spacing"]=l?p||"default":p),e.jsxs("div",{className:"container",...g,children:[e.jsx("div",{className:"container-label",children:m}),u]})}n.__docgenInfo={description:"",methods:[],displayName:"Container",props:{label:{required:!1,tsType:{name:"string"},description:""},density:{required:!1,tsType:{name:"union",raw:'"low" | "default" | "high"',elements:[{name:"literal",value:'"low"'},{name:"literal",value:'"default"'},{name:"literal",value:'"high"'}]},description:""},spacing:{required:!1,tsType:{name:"union",raw:'"xSmall" | "small" | "default" | "large" | "xLarge"',elements:[{name:"literal",value:'"xSmall"'},{name:"literal",value:'"small"'},{name:"literal",value:'"default"'},{name:"literal",value:'"large"'},{name:"literal",value:'"xLarge"'}]},description:""},resetDefaults:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const S={title:"Components/Container",component:n,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label displayed at the top of the container"},density:{control:"select",options:["low","default","high"],description:"Controls the density multiplier (affects padding)"},spacing:{control:"select",options:["xSmall","small","medium","large","xLarge"],description:"Controls the base spacing token"},resetDefaults:{control:"boolean",description:"Reset to default density and spacing values"},children:{control:!1,description:"Child components to render inside the container"}}},s={args:{label:"Default Container",density:"default",spacing:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Child inherits from parent container."}),e.jsx(n,{label:"Reset Container",resetDefaults:!0,children:e.jsx(a,{label:"Child uses default props."})})]})}},i={args:{label:"Density",density:"low",spacing:"default",children:e.jsx(a,{label:"Child 1"})}},t={args:{label:"Spacing",density:"default",spacing:"xSmall",children:e.jsx(a,{label:"Child 1"})}},r={args:{label:"Nested Containers Spacing",density:"default",spacing:"xLarge",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Spacing: xLarge"}),e.jsx(n,{label:"xSmall Spacing",spacing:"xSmall",children:e.jsx(a,{label:"Spacing: xSmall"})})]})}},d={args:{label:"Nested Containers Spacing",density:"high",spacing:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Density: high, Spacing: medium"}),e.jsx(n,{label:"xSmall Spacing",spacing:"xSmall",children:e.jsx(a,{label:"Density: high, Spacing: xSmall"})})]})}},o={args:{label:"Nested Containers Spacing",density:"high",spacing:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Density: high, Spacing: medium"}),e.jsx(n,{label:"Reset Defaults: xLarge Spacing",spacing:"xLarge",backgroundColor:"dark",resetDefaults:!0,children:e.jsx(a,{label:"Density: default, Spacing: xLarge"})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default Container",
    density: "default",
    spacing: "default",
    children: <>
      <Child label="Child inherits from parent container." />
      <Container label="Reset Container" resetDefaults>
        <Child label="Child uses default props." />
      </Container>
    </>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Density",
    density: "low",
    spacing: "default",
    children: <Child label="Child 1" />
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Spacing",
    density: "default",
    spacing: "xSmall",
    children: <Child label="Child 1" />
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Nested Containers Spacing",
    density: "default",
    spacing: "xLarge",
    children: <>
        <Child label="Spacing: xLarge" />
        <Container label="xSmall Spacing" spacing="xSmall">
          <Child label="Spacing: xSmall" />
        </Container>
      </>
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Nested Containers Spacing",
    density: "high",
    spacing: "default",
    children: <>
        <Child label="Density: high, Spacing: medium" />
        <Container label="xSmall Spacing" spacing="xSmall">
          <Child label="Density: high, Spacing: xSmall" />
        </Container>
      </>
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Nested Containers Spacing",
    density: "high",
    spacing: "default",
    children: <>
        <Child label="Density: high, Spacing: medium" />
        <Container label="Reset Defaults: xLarge Spacing" spacing="xLarge" backgroundColor="dark" resetDefaults>
          <Child label="Density: default, Spacing: xLarge" />
        </Container>
      </>
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Density","Spacing","NestedContainers","InheritedNestedContainers","InheritedNestedContainersResetDefaults"];export{s as Default,i as Density,d as InheritedNestedContainers,o as InheritedNestedContainersResetDefaults,r as NestedContainers,t as Spacing,b as __namedExportsOrder,S as default};
