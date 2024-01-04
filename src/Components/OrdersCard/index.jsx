import PropTypes from 'prop-types'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  //Para quitar el error ' ' is missing in props validation
  OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired
  }

  return (
    <div className='flex justify-between items-center mb-3 border border-black'>
      <p>
        <span>03/01/23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

export default OrdersCard