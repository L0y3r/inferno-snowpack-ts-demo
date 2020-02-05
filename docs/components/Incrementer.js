import{createVNode,createComponentVNode}from"/web_modules/inferno.js";import{Component}from"/web_modules/inferno.js";import{addOne}from"../utils/math.js";import{Visualizer}from"./Visualizer.js";/*
 * The first interface defines prop shape
 * The second interface defines state shape
 */export class Incrementer extends Component{constructor(a,b){super(a,b),this.state={value:1},this.doMath=()=>{this.setState({value:addOne(this.state.value)})}}render(){// uncomment: example of type verification
//
// this.props.name = 1;
// this.props.bar = 1;
return createVNode(1,"div",null,[this.props.name,createVNode(1,"button","my-button","Increment",16,{onClick:this.doMath}),createComponentVNode(2,Visualizer,{value:this.state.value})],0)}}