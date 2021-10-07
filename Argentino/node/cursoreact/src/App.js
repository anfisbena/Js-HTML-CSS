import logo from './logo.svg';
import './App.css';
import imgSelector from './imgSelector.jsx';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1]= useState('');
  const [linea2, setLinea2]= useState('');
  const [image, setImage]= useState('');
  const onChangeLinea1 = function(valor){setLinea1(valor.target.value)}
  const onChangeLinea2 = function(valor){setLinea2(valor.target.value)}
  const onChangeImage = function(valor){setImage(valor.target.value)}
  const onClickButon = function(valor){html2canvas(document.querySelector("#meme")).then(canvas => {
    var img=canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
    });
  }
  return (
    <div className="App">
      <select onChange={onChangeImage}>
          <option value="/meme/fire.jpg">casa en llamas</option>
          <option value="/meme/face1.jpg">random face</option>
          <option value="/meme/smart.jpg">Smart guy</option>
      </select>
      <br/>
      <input onChange={onChangeLinea1} type="text" placeholder="Texto arriba"/><br/>
      <input onChange={onChangeLinea2} type= "text" placeholder="Texto abajo"/><br/>
      <button onClick={onClickButon}>Exportar</button>
      
      <div id="meme">
        <span className="memeup">{linea1}</span><br/>
        <img src={image}/><br/>
        <span className="memedown">{linea2}</span>
      </div>
    </div>
  );
}

export default App;
