import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ itemCount }) => {
  return (
    <div className="relative inline-block">
      <FontAwesomeIcon icon={faShoppingCart} size="24px border border-gray-200 rounded-full p-3" className='text-gray' />
      {itemCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default Cart;