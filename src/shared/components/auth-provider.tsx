'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { CookieClient } from "../cookie-client";

const AppContext = createContext({
  isAuthenticated: false,
  logout: () => { }
})

export const useAuthContext = () => {
  return useContext(AppContext)
}

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!CookieClient.getAccessToken());
  }, [])

  const onLogout = () => {
    CookieClient.removeAccessToken();
    router.push('/login')
  }

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        logout: onLogout
      }}
    >{children}</AppContext.Provider>
  )
}
