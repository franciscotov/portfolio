import React from 'react';
import styles from './Home.module.scss';
import Photo from './Photo.jsx';
import personalData from '../personalData.json';

const Home = () => {
    return (
      <section className={styles.container} id='Home'>
        <Photo/>
        <div className={styles.containerGrap}>
          <div className={styles.containerTitle}> 
            <h1>
              Hello
              <br/>
              I am {personalData.firstName}
              <br/>
              {personalData.lastName}
            </h1>
          </div>
          <div className={styles.containerDescription}>
            <span>
              A Fullstack Developer Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Saepe ex cum similique vitae magni voluptatum
              sapiente quia iste, cumque sed eligendi nostrum blanditiis natus
              quae delectus! Voluptate nulla odio autem!
            </span>
          </div>
        </div>
      </section>
    );
};

export default Home;