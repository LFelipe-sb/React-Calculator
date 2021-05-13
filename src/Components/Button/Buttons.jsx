import React from 'react';
import styles from './Buttons.module.css';

function Buttons(props){
    
    const stylesButton = [];
    if(props.double) stylesButton.push(typeButton.buttonDouble);
    if(props.triple) stylesButton.push(typeButton.buttonTriple);
    if(props.operation) stylesButton.push(typeButton.buttonOperation);
    return <p onClick={props.action} className={styles.button} style={stylesButton[0]}>{props.label}</p>;
}

const typeButton = {
    buttonOperation : {
        color: '#FFF',
        backgroundColor: '#FAB231',
    },
    
    buttonDouble : {
        width: '50%',
    },
    
    buttonTriple : {
        width: '75%',
    },
};

export default Buttons;