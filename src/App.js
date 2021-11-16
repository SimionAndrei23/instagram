import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedFiles, setSelectedFiles] = useState([])

  console.log(selectedFiles[2]?.image)

  const addImage = (e) => {

  for(let i = 0; i < e.target.files.length;i++) {

    const newImage = e.target.files[i].name
    setSelectedFiles((prevStates) => [...prevStates,{
      image: newImage
    }])

  }

}


  return (
    <div className="App">
      <input type = 'file' multiple onChange = {addImage} />
      <div style = {{display: 'flex',gap: '10px',marginTop: '10px'}}>
        {
          !!selectedFiles.length && (
            selectedFiles?.map((selectedFile, index) => (
              <div key = {index}>
                  <img src = {selectedFile?.image} style = {{width: '40px', height: '40px'}} />
              </div>
            ))
          ) 
        }
      </div>
    </div>
  );
}

export default App;
