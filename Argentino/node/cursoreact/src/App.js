import logo from './logo.svg';
import './App.css';
import imgSelector from './imgSelector.jsx';

function App() {

  return (
    <div className="App">
      <select>
          <option value="face1">casa en llamas</option>
          <option value="fire">house on fire</option>
          <option value="smart">Smart guy</option>
      </select>
      <br/>
      <input type="text" placeholder="Texto arriba"/><br/>
      <imgSelector/>
      <input type= "text" placeholder="Texto abajo"/><br/>
      <button>Exportar</button>



    </div>
  );
}

export default App;
