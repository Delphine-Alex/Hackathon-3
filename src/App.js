import "./App.css";
import { createContext, useState } from "react";
import ProductCard from "./components/ProductCard";
import { Switch, Route } from "react-router-dom";

export const RefetcherContext = createContext([]);

const App = () => {
  const [refetcher, setRefetcher] = useState(false);

  return (
    <div className="App">
      <RefetcherContext.Provider value={[refetcher, setRefetcher]}>
        <Switch>
          <Route path="/categorie/:name" component={ProductCard} />
        </Switch>
      </RefetcherContext.Provider>
    </div>
  );
};

export default App;
