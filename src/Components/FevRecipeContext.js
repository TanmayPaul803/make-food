import React, { createContext, useState } from "react";
export const GlobalName = createContext();

export const FevRecipeContext = (props) => {
  const [fevRecipe, setFevRecipe] = useState([]);
  return (
    <GlobalName.Provider value={[fevRecipe, setFevRecipe]}>
      {props.children}
    </GlobalName.Provider>
  );
};
