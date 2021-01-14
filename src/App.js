import "./App.css";
import { createContext, useState } from "react";
import ProductCard from "./components/ProductCard";

export const RefetcherContext = createContext([]);

const App = () => {
  const [refetcher, setRefetcher] = useState(false);

  return (
    <div className="App">
      <RefetcherContext.Provider value={[refetcher, setRefetcher]}>
        <ProductCard />
      </RefetcherContext.Provider>
    </div>
  );
};

export default App;
