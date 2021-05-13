import React, {useState} from 'react';
import Buttons from './Components/Button/Buttons';
import Display from './Components/Display/Display';
import './App.css';

function App() {

  const initialStates = [{
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
  }]

  const [states, setStates] = useState(...initialStates);

  function addNumber(number){
    if(number === '.' && states.displayValue.includes('.')){
      return
    }
    
    //Tratamento para que não fique um 0 (zero) no inicio ao digitar outro valor.
    const clearDisplay = states.displayValue === '0' || states.clearDisplay;

    //Pegar o valor atual display e salvar em uma variavel.
    const currentValue = clearDisplay ? '' : states.displayValue;

    //Concatenação do valor do display com o numero clicado.
    const displayValue = currentValue + number;

    setStates(copyValue => {
      return {...copyValue, displayValue, clearDisplay: false}
    });

    const newValue = parseFloat(displayValue);
    const values = [...states.values];
    values[states.current] = newValue;
    setStates(copyValue => {
      return {...copyValue, values}
    });
  }

  function clearMemory(){
    setStates(...initialStates);
  }

  function setOperation(operation){
    if(states.current === 0){
      setStates(copyValue => {
        return {...copyValue, operation, current: 1, clearDisplay: true}
      });
    } else {
      const equals = operation === '=';
      const values = [...states.values];

      try{
        values[0] = eval(`${values[0]} ${states.operation} ${values[1]}`);
      } catch(error){
        values[0] = states.values[0];
      }

      values[1] = 0;

      setStates(copyValue => {
        return {
          ...copyValue, 
          displayValue: values[0],
          operation: equals ? null : operation,
          current: equals ? 0 : 1,
          clearDisplay: true,
          values,
        }
      });
    }
  }

  return (
    <div style={styles.container}>
      <h1>React Calculator IGTI</h1>
      <Display value={states.displayValue}/>
      <div style={styles.buttonsContainer}>
        <Buttons label='AC'triple action={clearMemory}/>
        <Buttons label='/' operation action={() => {setOperation('/')}}/>
        <Buttons label='7' action={() => addNumber('7')}/>
        <Buttons label='8' action={() => addNumber('8')}/>
        <Buttons label='9' action={() => addNumber('9')}/>
        <Buttons label='*' operation action={() => {setOperation('*')}}/>
        <Buttons label='4' action={() => addNumber('4')}/>
        <Buttons label='5' action={() => addNumber('5')}/>
        <Buttons label='6' action={() => addNumber('6')}/>
        <Buttons label='-' operation action={() => {setOperation('-')}}/>
        <Buttons label='1' action={() => addNumber('1')}/>
        <Buttons label='2' action={() => addNumber('2')}/>
        <Buttons label='3' action={() => addNumber('3')}/>
        <Buttons label='+' operation action={() => {setOperation('+')}}/>
        <Buttons label='0' double action={() => addNumber('0')}/>
        <Buttons label='.' action={() => addNumber('.')}/>
        <Buttons label='=' operation action={() => {setOperation('=')}}/>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    width: '30%',
    margin: '40px auto'
  },
  buttonsContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
  }
};

export default App;