import React from "react"
import GlobalContextProvider from "./context/globalContextProvider"

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
}
