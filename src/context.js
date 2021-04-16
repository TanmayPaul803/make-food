import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [contextValue, setContextValue] = useState("");

  return (
    <Context.Provider value={[contextValue, setContextValue]}>
      {props.children}
    </Context.Provider>
  );
};
