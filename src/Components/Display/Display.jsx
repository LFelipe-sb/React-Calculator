import React from 'react';

function Display(props){
    return(
        <div style={styles.display}>
            <p style={styles.displayValue}>
                {props.value}
            </p>
        </div>
    );
}

const styles = {
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#FFF',
    }
};

export default Display;