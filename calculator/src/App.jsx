import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import { useState } from 'react';
function App(){
  const [change,setChange] = useState("");
  let changable = (buttonText) =>{
    

    if(buttonText==='C'){
     setChange('');
         

    }
    else if(buttonText==='='){
  let result = eval(change);
  setChange(result);
    }
    else{
      let newValue = change+buttonText;
       setChange(newValue);
    }
    // else{
    //    setChange(event.target.textContent);
    //    console.log(event.target.textContent)
    // }
    // setChange(event.target.innerText)
    // console.log(event.target.innerText)
  }
  return (
    <>
    <center>
    <div className={styles.calculator}>
     <Display change={change}/>
    <ButtonsContainer button={changable}/>
    </div>
    </center>
    </>
  )
}
export default App;