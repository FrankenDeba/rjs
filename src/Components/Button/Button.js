import React from 'react'
import styles from "./Button.module.css"

const Button = (props) => {
    return (
        <div>
          <button className = {styles.button} onClick = {props.click}>Press</button>  
        </div>
    )
}

export default Button
