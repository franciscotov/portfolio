import React from 'react';
import styles from './Images.module.scss';

const Images = ({ state }) => {
    let listOfImages = [
        {description: state ? 'development': 'desarrollo', img: 'web_development.png'},
        {description: state ? 'sports': 'deportes', img: 'sports.png'},
        {description: 'responsive', img: 'responsive.png'},
        {description: state ? 'science' : 'ciencias', img: 'atom.png'}
    ]
    
    return (
        <div className={styles.container}>
            {listOfImages.map((ele) => (
                <div className={styles.containerImg}>
                    <img src={require(`../assets/images/${ele.img}`).default} alt="" className={styles.images}/>
                    <span className={styles.description}>{ele.description.toUpperCase()}</span>
                </div>

            ))}
        </div>
    );
}

export default Images;