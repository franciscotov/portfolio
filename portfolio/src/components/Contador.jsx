import React, {useEffect, useState} from 'react';

const Contador = () => {
    const [state, setState] = useState(0);
    let count = 0;
    useEffect(()=>{

    }, [count])
    const handlerIncre = (e) =>{
        console.log(e.target.id, count)
        if(e.target.id === 'increment'){
           setState(state +1 );
        }
    }
    return (
        <div>
            <div value='texto' id="texto">{state}</div>
            <button id="increment" onClick={handlerIncre}>+</button>
            <button id="decrement">-</button>
        </div>
    );
};

export default Contador;