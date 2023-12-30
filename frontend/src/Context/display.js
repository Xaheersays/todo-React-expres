import { createContext, useContext } from "react";

const DisplayContext = createContext({
    isValidToken : false,
    setIsValidToken : ()=>{}
})

export const useDisplayContext = () => useContext(DisplayContext)

export const DisplayContextProvider = DisplayContext.Provider