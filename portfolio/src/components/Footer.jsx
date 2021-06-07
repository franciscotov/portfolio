import React from 'react';
import styles from './Footer.module.scss';
import {GrLinkedinOption} from 'react-icons/gr';
import {FaGithub, FaFreeCodeCamp, FaDribbble} from 'react-icons/fa'
import personalData from '../personalData.json';

const Footer = () => {
    
        return (
            <section className={styles.container}>
                <div className={styles.elements}>
                    <div className={styles.icon}>
                        <a href="https://www.linkedin.com/in/patsy-guerrero/" target="_blank" rel="noreferrer">
                        <GrLinkedinOption className={styles.size}/>
                        </a>
                        
                    </div>
                    <div className={styles.icon}>
                        <a href="https://github.com/PatsyGuerrero" target="_blank" rel="noreferrer">
                        <FaGithub className={styles.size}/>
                        </a>
                    </div>
                    <div className={styles.icon}>
                        <a href="https://github.com/PatsyGuerrero" target="_blank" rel="noreferrer">
                        <FaFreeCodeCamp className={styles.size}/>
                        </a>
                    </div>
                    <div className={styles.icon}>
                        <a href="https://dribbble.com/IchBinPatsy" target="_blank" rel="noreferrer">
                        <FaDribbble className={styles.size}/>
                        </a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <span>© 2021 Developer by {personalData.nickName}</span>
                </div>
            </section>
        );
    };



export default Footer;