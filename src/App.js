import Shop from './components/Shop/Shop';
import Menu from './components/Menu'
import Router from './Router'


import './App.css';

const App = () => {

  return (
    <div className="App">    
    <Router /> 
      <Menu />
      <Shop />
    </div>
  );
}

export default App;
