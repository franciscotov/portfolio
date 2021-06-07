import React from 'react';
import styles from './Download.module.scss';

const Download = () => {
    return (
        <div className={styles.containerDownload}>
            <a href='CV_Francisco_Tovar.pdf' download>Download CV</a>
        </div>
    );
};

export default Download;

// const blob = new Blob([output]);                   // Step 3
//     const fileDownloadUrl = URL.createObjectURL(blob); // Step 4
//     this.setState ({fileDownloadUrl: fileDownloadUrl}, // Step 5
//       () => {
//         this.dofileDownload.click();                   // Step 6
//         URL.revokeObjectURL(fileDownloadUrl);          // Step 7
//         this.setState({fileDownloadUrl: ""})
//     })

// // The hidden anchor element:
//     <a style={{display: "none"}}
//          download={this.fileNames[this.state.fileType]}
//          href={this.state.fileDownloadUrl}
//          ref={e=>this.dofileDownload = e}
//     >download it</a>