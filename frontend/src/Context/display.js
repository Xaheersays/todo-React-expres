import { createContext, useContext } from "react";

const DisplayContext = createContext({
    showTodos:false,
    setShowTodos:()=>{},
    hasToken :false,
    setHasToken:()=>{},
    showRegister : false,
    setshowRegister : ()=>{},
    loading:false,
    setLoading :()=>{}
})

export const useDisplayContext = () => useContext(DisplayContext)

export const DisplayContextProvider = DisplayContext.Provider