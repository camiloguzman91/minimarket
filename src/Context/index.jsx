import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  const [count, setCount] = useState(0)
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}


//Para solucionar el error <'children' is missing in props validation eslint(react/prop-types)>
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
