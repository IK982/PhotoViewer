
import React from 'react';
import {PhotoViewer} from "./PhotoViewer/PhotoViewer";
import {Thumbnails} from "./Thumbnails/Thumbnails";
import * as styles from "./App.module.scss";
function App() {
  return (
    <main>
      <h1 className={styles.title}>Photo Viewer</h1>
      <PhotoViewer imageUrl="https://i.picsum.photos/id/223/200/300.jpg?hmac=IZftr2PJy4auHpfBpLuMtFhsxgQYlUgXdV5rFwjGItQ"/>
      <Thumbnails/>
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