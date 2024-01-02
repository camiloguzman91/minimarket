import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
  // Shopping cart - Increment quantity
  const [count, setCount] = useState(0)

  // Product detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product detail - Show product
  const [productToShow, setProductToShow] = useState({})

  //Shopping Cart - Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}


//Para solucionar el error <'children' is missing in props validation eslint(react/prop-types)>
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
