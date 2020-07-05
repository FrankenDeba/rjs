import React from 'react'
import styles from './Box.module.css'


class Box extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
        
        }
    }
    
   
    
    render(){
    const {col}=this.props
        return (
            <div className = {`${styles.container} ${col==='red'?styles.red:styles.green}`}>
            
                
                
                
            </div>
        )
    }
    
}

export default Box
