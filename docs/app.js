import{createVNode,createFragment,createComponentVNode,createTextVNode}from"/inferno-snowpack-ts-demo/web_modules/inferno.js";import{Component,render,version,Fragment}from"/inferno-snowpack-ts-demo/web_modules/inferno.js";import{Incrementer}from"./components/Incrementer.js";const container=document.getElementById("app");class MyComponent extends Component{constructor(a,b){super(a,b),this.tsxVersion=void 0,this.render=()=>createFragment([createVNode(1,"h1",null,[createTextVNode("Welcome to Inferno "),version,createTextVNode(" TSX "),this.tsxVersion],0),createComponentVNode(2,Incrementer,{name:"Crazy Button"})],4),this.tsxVersion=3.7}}render(createComponentVNode(2,MyComponent),container);