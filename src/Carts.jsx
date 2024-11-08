

const Carts = ({cart}) => {
    return (
        <div>
            <h4>Cart : {cart.length}</h4>

            <div className="cart-section">
                {
                    cart.map(bottle => <img src={cart.image}></img>)
                }
            </div>

        </div>
    );
};

export default Carts;