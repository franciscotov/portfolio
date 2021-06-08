import React from 'react';
import styles from './Experience.module.scss';
import Accordeon from './Accordion';

// import Iconos from './Iconos';
import Images from './Images';

const Experience = ({state}) => {
    return (
        <section className={styles.container} >
                <div className={styles.iconos}>
                    <Images state={state}/>
                </div>
                <div className={styles.elements} id='Experience'> 
                    <h1>{state ? 'Experience': 'Experiencia'}</h1>
                    <div className={styles.line}></div>
                    <div className={styles.acordeon}> 
                        <Accordeon state={state} />
                    </div>
                </div>
        </section>
    );
};

export default Experience;