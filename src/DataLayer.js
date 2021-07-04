import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const DataLayerContext = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);
