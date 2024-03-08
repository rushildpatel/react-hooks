import React from "react";

// import HookCounter from "./components/HookCounter";
// import HookCounter2 from "./components/HookCounter2";
// import HookCounter3 from "./components/HookCounter3";
// import HookCounter4 from "./components/HookCounter4";

//useEffect
// import HookCounter from "./components-useEffect/HookCounter";
// import HookCounter2 from "./components-useEffect/HookCounter2";
// import HookIntervalCounter from "./components-useEffect/HookIntervalCounter4";
// import HookMouse3 from "./components-useEffect/HookMouse3";

//useEffect for Fetching API
// import DataFetch1 from "./complonents-fetch/DataFetch1";
// import DataFetch2 from "./complonents-fetch/DataFetch2";
// import DataFetch3 from "./complonents-fetch/DataFetch3";

//ContextAPI Hook
// componentC -> componentE -> componentF
import C from "./components-contextAPI/C";

// create a context
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Ittachi"}>
        <ChannelContext.Provider value={"Rushil"}>
          <C />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
