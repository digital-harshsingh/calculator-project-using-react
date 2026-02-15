import React from 'react'
import styles from './Buttons.module.css';
const ButtonsContainer = ({button}) => {
  const buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
 return <div className={styles.buttonscontainer}>

  {buttonName.map((item)=> {
  return <button className={styles.button} 
  onClick={()=>button(item)}
  >{item} </button> 
  })}
        
        {/* <button className={styles.button}>1</button>
        <button className={styles.button}>2</button>
        <button className={styles.button}>+</button> */}
      </div>
}

export default ButtonsContainer;
