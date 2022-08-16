import { createContext, useState } from "react";
import { useEffect } from "react";

export const AuthContex = createContext()

export const AuthProvider = ({children}) => {
  const localData = localStorage.getItem("token")
  
  const [ token, setToken] = useState(localData)

useEffect(() => {
  if (token) {
    localStorage.setItem("token", JSON.stringify(token))
  }
  else {
    localStorage.removeItem("token")
  }
},[token])

  return (
    <AuthContex.Provider value={{ token, setToken }}>
      {children}
    </AuthContex.Provider>
  )
}

