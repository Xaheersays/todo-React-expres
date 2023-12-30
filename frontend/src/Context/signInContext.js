import { createContext, useContext } from "react";

const SignInContext = createContext({
    showSignIn : false,
    setShowSignIn :()=>{}
})
export const useSignInContext = ()=>useContext(SignInContext)

export const SignInContextProvider = SignInContext.Provider