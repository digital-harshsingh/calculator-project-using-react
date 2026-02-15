import React from 'react'
import styles from './Display.module.css';
const Display = ({change}) => {
  return  <input className={styles.display}type='text' value={change}/>
   
  
}

export default Display;
