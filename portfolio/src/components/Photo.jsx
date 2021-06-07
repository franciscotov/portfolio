import React from 'react';
import Download from './Download';
import styles from './Photo.module.scss';
import img from "../assets/img/photo.JPG";

const Photo = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.photoContainer}>
                {/* <div className={styles.photo}>hola</div> */}
                <img src={img} alt="" className={styles.photo}  width="25vw" height="40vw"/>
                <Download />
            </div>
        </div>
        </>
    );
};

export default Photo;