import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckOutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <aside 
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white scrollable-cards`}>
      
      <div className='flex flex-col p-6'>
        <div className='checkout-title-menu'>
          <h2 className='font-medium text-xl'>My Order</h2>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='w-6 h-6 cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className='px-6'>
        {
          context.cartProducts.map(product => (
            <OrderCard 
              key={product.id}
              title={product.title} 
              imageUrl={product.image} 
              price={product.price} 

            />
          ))
        }
      </div>
    </aside>
  )
}

export default CheckOutSideMenu