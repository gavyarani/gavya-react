// import React,{Component} from 'react';
// export default class Hello extends React.Component
// {
//     render()
//     {
//         return(<p>Hello World!!!</p>);
//     }
// }


import React from 'react';
import ReactDOM from 'react-dom';
var a=prompt("Enter your name","enter");
var b=prompt("Enter any number","enter");
var c=prompt("Enter your favourite color","enter");
var d=prompt("Enter your favourite brand","brand");
export default class Car extends React.Component{
  

    constructor(props) {
    super(props);
    this.state={
        brand:a,
        color:b,
        name:c,
        number:d

    };
}
changeColor = () => {
        this.setState({color:"blue"});
    }


    static getDerivedStateFromProps(props, state) {
        return {brand: props.fav};
      }



      componentDidMount() {
        setTimeout(() => {
          this.setState({name: "alto"})
        }, 1000)
      }




      getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("root").innerHTML =
        "Before the update, the favorite color was " + prevState.color;
      }





  render(){

    
    return(
        <center>
    <>
    
        <div id="col">
        <p>{this.state.brand}</p>
        <p>{this.state.color}</p>
        <p>{this.state.name}</p>
        <p>{this.state.number}</p>
        <button type="button" onClick={this.changeColor}>click me</button>
        <p>This is my {this.state.color}</p>
        </div>
    </>
    </center>
    );

  }  
}
ReactDOM.render(<Car/>, document.getElementById('root'));

