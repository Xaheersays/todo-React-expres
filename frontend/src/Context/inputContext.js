import { createContext, useContext } from "react";

const InputContext = createContext({
    nameRef : null,
    unameRef : null,
    passRef : null

})

export const useInputContext = ()=>(useContext(InputContext))

export  const InputContextProvider = InputContext.Provider