import PropTypes from 'prop-types'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  //Para quitar el error ' ' is missing in props validation
  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired
  }

  return (
    <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='font-light'>03/01/23</span>
          <span className='font-light'>{totalProducts} articles</span>
        </p>
        <p className='flex items-center gap-2'>
          <span className='font-medium text-2xl'>${totalPrice}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </p>
      </div>
    </div>
  )
}

export default OrdersCard