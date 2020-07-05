import React from 'react'
import Box from "./Components/Box/Box"
import Button from "./Components/Button/Button"
import './App.css'

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       col:"red",
       isRed:true,
       text:"",
       arr:[[1],[1,1],[1,1,1],[1,1,1,1]]
    
    }
  }
  
  changeColor = () =>{
    let col = this.state.isRed?"green":"red"
    this.setState({
      isRed:!this.state.isRed,
      col:col,
      text:"Button Clicked"})
  }
  render(){
    return (
      <div className="App">
        <div className = "textBox">
        {this.state.arr.map((item,index) =>{
                    return <div key = {index} className = "textLoop">{item.map((el,index) =>{
                        return <span key = {index} className = "hellotext">Hello</span>
                     })}</div>
                })
                }
        </div>
       <Box col={this.state.col}/>
       <Button click = {()=>this.changeColor()}/>
       <div className = "text">{this.state.text}</div>
      </div>
    )
  }
 
}

export default App;
