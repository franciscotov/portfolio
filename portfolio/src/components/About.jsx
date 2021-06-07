import React from 'react';
import styles from './About.module.scss'

const About = () => {
    return (
        <section className={styles.container} id='About'> 
            <div className={styles.containerGrap}>
                <div className={styles.containerTitle}> 
                    <h2>About</h2>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.containerFirstDescription}>
                    <span className={styles.fristDescription}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. Maiores vel voluptatem debitis. Molestiae, ad earum nam tenetur eum,
                    blanditiis libero quae voluptatem id, laboriosam voluptatum nemo. Error dignissimos 
                    recusandae atque. 
                    </span>
                </div>
                <div className={styles.containerSecondDescription}>
                    <span className={styles.secondDescription}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing 
                    elit. Maiores vel voluptatem debitis. Molestiae, ad earum nam tenetur eum,
                    blanditiis libero quae voluptatem id, laboriosam voluptatum nemo. Error dignissimos 
                    recusandae atque. 
                    </span>
                </div>
            </div>
        </section>
                 
    );
};

export default About;