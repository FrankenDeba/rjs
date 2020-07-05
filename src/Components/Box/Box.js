import React from 'react'
import styles from './Box.module.css'


class Box extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
        arr:[[1],[1,1],[1,1,1],[1,1,1,1]]
        }
    }
    
   
    
    render(){
    const {col}=this.props
        return (
            <div className = {`${styles.container} ${col==='red'?styles.red:styles.green}`}>
            
                {this.state.arr.map(item =>{
                    return <div>{item.map(el =>{
                        return <span className = {styles.text}>Hello</span>
                     })}</div>
                })
                }
                
                
            </div>
        )
    }
    
}

export default Box
