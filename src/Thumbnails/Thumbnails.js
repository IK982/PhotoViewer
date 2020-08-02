import React from "react";
import * as styles from "./Thumbnails.module.scss";
import {ImageUrls} from "./imageGenerator";

export const Thumbnails = (props) => {

    
    const images = ImageUrls.map(url =>
        <li className={styles.thumbnail}>
            
            <img onClick={() => props.updateImageURL(url)} className={styles.thumbnailImage} src={url} alt="Thumbnail"/>
        </li>
    );
    return (
        <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Images</h2>
            <h2>This image is selected {props.selectedImageURL}</h2>
            <ul className={styles.thumbnails}>
                {images}
            </ul>
        </section>
    );
};










// <section>
//     <h2>Images</h2>
//     <ul>{images}</ul>
// </section>
// );
// }
// ImageUrls.forEach(Link => {
    //     const image = <img src = {Link}></img>;
    //     images.push(<li>{image}</li>)
    
// });