import ProductCard from './components/ProductCard'
import './App.css';

const App = () => {

  return (
    <div className="App">
      <ProductCard 
        title='Amazaké, traditionnel rice based drink' // replace with data 
        price='5 $' // replace with data
      />
    </div>
  );
}

export default App;
