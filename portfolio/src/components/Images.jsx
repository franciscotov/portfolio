import React from 'react';
import styles from './Images.module.scss';

const Images = () => {
    let listOfImages = [
        {description: 'development', img: 'web_development.png'},
        {description: 'sports', img: 'sports.png'},
        {description: 'responsive', img: 'responsive.png'},
        {description: 'science', img: 'atom.png'}
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