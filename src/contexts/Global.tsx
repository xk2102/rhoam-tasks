import React, { useState, createContext } from "react";

type GlobalProviderProps = {
  children: React.ReactNode;
};
type GlobalType = {
  varA: string | null;
  setVarA: React.Dispatch<React.SetStateAction<string | null>>;
  varB: boolean;
  setVarB: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Global = createContext<GlobalType | null>(null);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  // ---------------------------------------------
  // --STATE--------------------------------------
  // ---------------------------------------------
  const [varA, setVarA] = useState<string | null>("varA");
  const [varB, setVarB] = useState(false);

  return <Global.Provider value={{ varA, setVarA, varB, setVarB }}>{children}</Global.Provider>;
};
