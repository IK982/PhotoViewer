import React, { useState } from "react";
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {Thumbnails} from "./Thumbnails/Thumbnails";
import * as styles from "./App.module.scss";

function App() {

  const [selectedImageURL, updateImageURL] = useState ("https://picsum.photos/id/600/1600/900")

  return (
    <main>
      <h1 className={styles.title}>Photo Viewer</h1>
      <PhotoViewer imageUrl={selectedImageURL}/>
      <Thumbnails selectedImageURL={selectedImageURL} updateImageURL={updateImageURL}/>
    </main>
  );
}
export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


//^A more long winded way of doing above:
//const statelist= useState("https://picsum.photos/id/6${imageNumberString}/1600/900")
//const selectedImageURL = statelist[0]
//const updateImageURL = statelist[1]

  //UseState is a function given to us by React that asks React to create a new bit of state that its going to keep track of
  //Its returning a list/string of things i.e. pictures