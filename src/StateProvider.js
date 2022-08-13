// set up data layer
// We need this to track the basket

import { createContext, useContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// Build a provider to wrap our entire app inside the provider and give to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// This is how we use it inside of a component
export const useStateValue =() => useContext(StateContext);