import Shop from "./components/Shop/Shop";

import "./App.css";
import { createContext, useState } from "react";

export const RefetcherContext = createContext([]);

const App = () => {
  const [refetcher, setRefetcher] = useState(false);

  return (
    <div className="App">
      <RefetcherContext.Provider value={[refetcher, setRefetcher]}>
        <Shop />
      </RefetcherContext.Provider>
    </div>
  );
};

export default App;
