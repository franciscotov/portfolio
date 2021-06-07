import React, { useState } from 'react';
import data from '../data.json';
import styles from './Accordion.module.scss';

const Accordion = () => {
    
    let indexPlus;

    const [active, setActive] = useState(''); 

    const eventHandler = (e, index) => {
        e.preventDefault();
        //setActive(index);
        active===index? setActive(''):setActive(index);
    }

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    return(
        <>
            <form>     
                { data.map((tab, index) => (
                    <div key={index} className={styles.deslizar}>
                        <h3>
                            <button 
                                onClick={(e) => eventHandler(e, index)}
                                className={ active === index ? 'active' : 'inactive'}
                                aria-expanded={ active === index ? 'true' : 'false' }
                                aria-controls={ 'sect-' + indexCount(index) }
                                aria-disabled={ active === index ? 'true' : 'false' }
                                tabIndex={indexCount(index)}
                            >
                                <span className={styles.titlewrapper}>{tab.title}
                                    <span className={ active === index  ? styles.plus : styles.minus}></span>
                                </span>  
                            </button>
                        </h3>
                        <div id={ 'sect-' + indexCount(index) } className={ active === index  ? styles.panelopen : styles.panelclose }>
                            <p className={styles.date}>{ tab.date }</p>
                            <p>{ tab.description }</p>
                        </div>
                    </div>
                    ))
                }
            </form>
        </>
    );
}

export default Accordion;
