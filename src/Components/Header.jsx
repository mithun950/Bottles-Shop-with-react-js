import PropTypes from 'prop-types';
import './Header.css'
const Header = ({bottle,handleAddToCard}) => {
    const {name,image,price,stock,ratingsCount,shipping,quantity,id} = bottle;

    return (
        <div className='bottle'>
            <h2>Name : <small>{name}</small></h2>
            <img className='bottle-image' src={image} alt="" />
            <p>Price : {price}</p>
            <p>Stock: {stock}</p>
            <p>Ratings: {ratingsCount}</p>
            <p>Shipping: {shipping}</p>
            <p>Quantity: {quantity}</p>
            <button className='purchase-btn' onClick={() => handleAddToCard(bottle)}>Purchase</button>
            

        
        </div>
    );
};

Header.PropTypes = {
    Header: PropTypes.func.isRequired ,
    bottle: PropTypes.object.isRequired

};

export default Header;