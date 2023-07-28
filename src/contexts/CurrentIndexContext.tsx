import React from "react";

type ContextType = [number, React.Dispatch<React.SetStateAction<number>>];

const CurrentIndexContext = React.createContext<ContextType | undefined>(undefined);

export default CurrentIndexContext;
