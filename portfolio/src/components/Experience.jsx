import React from 'react';
import styles from './Experience.module.scss';
import Accordeon from './Accordion';

// import Iconos from './Iconos';
import Images from './Images';

const Experience = () => {
    return (
        <section className={styles.container} >
                <div className={styles.iconos}>
                    <Images/>
                </div>
                <div className={styles.elements} id='Experience'> 
                    <h1 >Experience</h1>
                    <div className={styles.line}></div>
                    <div className={styles.acordeon}> 
                        <Accordeon/>
                    </div>
                </div>
        </section>
    );
};

export default Experience;