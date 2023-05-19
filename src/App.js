import './App.css';
import ListaTareas from './componentes/ListaTareas';
import Logo from './componentes/Logo.js';

function App() {
  return (
    <div className="app-tareas">
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;
