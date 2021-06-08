import React from 'react';
// import { FaLanguage } from 'react-icons/fa';

const Language = ({state, setState}) => {
    const handlerLanguage = () => {
        if(state){
            setState(false);
        }else{
            setState(true)
        }
    }
    return(
        <div onClick={handlerLanguage}>{state ? 'EN': 'ESP'}</div>
    );
}
export default Language;