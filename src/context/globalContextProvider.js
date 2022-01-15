import React, { useReducer, createContext } from "react"

export const GlobalStateContext = createContext({})
export const GlobalDispatchContext = createContext({})

const initialState = {
  selectedLanguage: "ca",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CA": {
      return {
        ...state,
        selectedLanguage: "ca",
      }
    }
    case "EN": {
      return {
        ...state,
        selectedLanguage: "en",
      }
    }
    case "JA": {
      return {
        ...state,
        selectedLanguage: "ja",
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
