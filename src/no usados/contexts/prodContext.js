import React from "react";

const ProdContext = React.createContext({
  cartProd: [],
  updateProd: (id) => null,
});

export const ProdProvider = ProdContext.Provider;

export default ProdContext;
