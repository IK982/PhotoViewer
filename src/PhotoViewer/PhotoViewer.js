import React from "react";  // import React (to provide access to JSX)
import * as styles from './PhotoViewer.module.scss';

export const PhotoViewer = ({imageUrl}) => (
    <section className={styles.section}>
        <img className={styles.image} src={imageUrl} alt=""/>
    </section>
);




// function PhotoViewer() {    // declare a new function called 'PhotoViewer'
// // return some JSX
//     return (                
//         <div className={styles.myClass}>                
//         <img src = "https://picsum.photos/seed/picsum/200/300"></img>
//         </div>
//     );
// }



// export {PhotoViewer};       // Export the function so that it can be imported in other files
