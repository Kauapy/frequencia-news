import './App.css';
import TaskBar from './componentes/TaskBar/taskbar';
import { BrowserRouter } from 'react-router-dom';

//Pra voce importar um componente, use a sintaxe abaixo
//import NomeDoComponente from './caminho/NomeDoComponente';


//Esse App.js vai ser o pai de todos os componentes, ele vai guardar todos os outros componentes


function App() {
  return (
    <BrowserRouter>
      <TaskBar/>
    </BrowserRouter>
  );
}

export default App;
