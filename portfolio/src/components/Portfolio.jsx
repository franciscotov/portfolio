import React from 'react';
import styles from './Portfolio.module.scss';
import data from '../projects.json';

const Portfolio = ({ state }) => {
    let dat = state ? data[0] : data[1];

    return (
        <section className={styles.container} id='Portfolio'>
           <div className={styles.elements}>
                <h1>Portfolio</h1>
                <div className={styles.line}></div>
           </div>
           { dat.map((e, key) => (
               <>
           <div key={key} className={styles.cart}>
               <div className={styles.info}>
                   <div className={styles.texto}>
                        <h2>{e.name}</h2>
                        <span className={styles.description}>{e.description}</span>
                    </div>
               </div>
              
                   {/* <img src={require(`./${e.img}`).default}  alt="no se encuentra"  /> */}

                   {/* {typeof `e.img` } */}
                { e.img !== ""?
                    <div className={styles.imagen}>
                    <img src={require(`../assets/img/${e.img}`).default}  alt="no se encuentra"  />
                    </div>: <div className={styles.imagen}>
                        <video controls>
                            <source src={require('../assets/img/codebakery_ecommerce.mp4').default} type="video/mp4"/>
                        </video>
                    </div>
                }
           </div>
                <div className={styles.botones}>
                    <button> <a href={e.deploy} target="_blank" rel="noreferrer">DEMO </a> </button>
                    <button className={styles.repo}> <a href={e.github} target="_blank" rel="noreferrer">{state ? 'REPOSITORY': 'REPOSITORIO'} </a></button>
                </div>
            </>
           ))
           }
            
        </section>
    );
};

export default Portfolio;