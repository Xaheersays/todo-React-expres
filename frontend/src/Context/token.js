import { createContext, useContext } from "react";

const TokenContext = createContext({
    token:''
})

export const useToken = () => useContext(TokenContext)
export const TokenContextProvider = TokenContext.Provider