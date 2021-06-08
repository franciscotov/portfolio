import React from 'react';
import { MdLanguage } from 'react-icons/md';
import styles from './Language.module.scss';

const Language = ({state, setState}) => {
    const handlerLanguage = () => {
        if(state){
            setState(false);
        }else{
            setState(true)
        }
    }
    return(
        <div onClick={handlerLanguage} className={styles.red}>
            {state ? 'EN': 'ESP'} <MdLanguage className={styles.icon}/>
        </div>
    );
}
export default Language;