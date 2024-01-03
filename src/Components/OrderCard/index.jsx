import PropTypes from 'prop-types'

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props

  //Para quitar el error ' ' is missing in props validation
  OrderCard.propTypes = {
    id: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    imageUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired,
    handleDelete: PropTypes.node.isRequired,
  }

  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}/>
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        <button className=' bg-red-600 w-5 h-5 rounded-full '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer text-white" onClick={() => handleDelete(id)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default OrderCard