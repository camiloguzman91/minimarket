import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}


//Para solucionar el error <'children' is missing in props validation eslint(react/prop-types)>
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
