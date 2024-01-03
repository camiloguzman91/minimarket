import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      My Order
      <div className='px-6 flex-1'>
        {
          context.order && context.order.length > 0 ? context.order.slice(-1)[0].products.map(product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title} 
              imageUrl={product.image} 
              price={product.price} 
            />
          ))
        : <p>There is no product.</p>
        }
      </div>
    </Layout>
  )
}

export default MyOrder