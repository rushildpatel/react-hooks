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
// import C from "./components-contextAPI/C";

// create a context
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <UserContext.Provider value={{ a: "Ittachi", b: "jacob" }}>
//         <ChannelContext.Provider value={"Rushil"}>
//           <C />
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }

/////////////////////////////////////////----USE REDUCER HOOK----///////////////////////////////////////////////////
// import Counter1 from "./components-useReducer/Counter1";
// import Counter2 from "./components-useReducer/Counter2";
// import Counter3 from "./components-useReducer/Counter3";
// function App() {
//   return (
//     <div className="App">
//       <Counter3 />
//     </div>
//   );
// }

///////////////////////////////////////////----USE REDUCER HOOK with USECONTEXT HOOK----///////////////////////////////////////////////////
// import A from "./useReducerWithUseContext/A";
// import C from "./useReducerWithUseContext/C";
// import B from "./useReducerWithUseContext/B";
// import { useReducer } from "react";

// export const CountContext = React.createContext();

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
//       <div className="App">
//         Count - {count}
//         <A />
//         <B />
//         <C />
//       </div>
//     </CountContext.Provider>
//   );
// }

///////////////////////////////////////////////////// ftech using USE REDUCER HOOK///////////////////////////////
// import FetchUseReducer from "./components-useReducerForFetch/FetchUseReducer";

// function App() {
//   return (
//     <div className="App">
//       <FetchUseReducer />
//     </div>
//   );
// }

///////////////////////////////////////////////////// useCallback hook ////////////////////////////////////////
// import ParentComponent from "./componets-useCallback/ParentComponet";
// function App() {
//   return (
//     <div className="App">
//       <ParentComponent />
//     </div>
//   );
// }

///////////////////////////////////////////////////// useMemo hook ////////////////////////////////////////
import Counter from "./components-useMemo/Counter";
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
