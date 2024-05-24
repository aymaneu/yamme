// contexts/BooleanContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BooleanContextType {
  booleanState: boolean;
  setBooleanState: React.Dispatch<React.SetStateAction<boolean>>;
}

const BooleanContext = createContext<BooleanContextType | undefined>(undefined);

export const useBooleanContext = (): BooleanContextType => {
  const context = useContext(BooleanContext);
  if (!context) {
    throw new Error("useBooleanContext must be used within a BooleanProvider");
  }
  return context;
};

interface BooleanProviderProps {
  children: ReactNode;
}

export const BooleanProvider: React.FC<BooleanProviderProps> = ({
  children,
}) => {
  const [booleanState, setBooleanState] = useState<boolean>(false);

  return (
    <BooleanContext.Provider value={{ booleanState, setBooleanState }}>
      {children}
    </BooleanContext.Provider>
  );
};
