import React from 'react';
import PropTypes from 'prop-types';

import ShopComponent from './shop.component';
import ShopCreateContainer from '../../containers/shop/shop.create.container';
import '../../assets/styles/shop.scss';

const ShopListComponent = props => {
    const { shops, editShop, deleteShop, handleChange } = props;

    return (
        <div className="shop_wrapper">
            <h2>SHOPS</h2>
            <ul>
                {
                    shops.map(shop =>
                        <ShopComponent
                            key={shop._id}
                            id={shop._id}
                            shop={shop}
                            editShop={editShop}
                            deleteShop={deleteShop}
                            handleChange={handleChange}
                        />
                    )
                }
            </ul>
            <ShopCreateContainer />
        </div>
    )
}

ShopListComponent.propTypes = {
    shops: PropTypes.arrayOf(
        PropTypes.shape({
            products: PropTypes.arrayOf(
                PropTypes.shape({
                    products: PropTypes.arrayOf({
                        _id: PropTypes.string,
                        name: PropTypes.string,
                        quantity: PropTypes.number,
                        price: PropTypes.number
                    })
                })
            ),
            _id: PropTypes.string,
            name: PropTypes.string,
            createdAt: PropTypes.string,
            updatedAt: PropTypes.string
        })
    ),
    editShop: PropTypes.func,
    deleteShop: PropTypes.func,
    handleChange: PropTypes.func
}

export default ShopListComponent;