import React from 'react';
import PropTypes from 'prop-types';

import ProductComponent from './product.component';

const ProductListComponent = (props) => {
    const { shop, handleChange, editProduct, deleteProduct } = props;

    return (
        shop.products.map(product => {
            return <ProductComponent
                key={product._id}
                product={product}
                handleChange={handleChange}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
            />
        })
    )
};

ProductListComponent.propTypes = {
    shop: PropTypes.shape({
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
    }),
    handleChange: PropTypes.func,
    editProduct: PropTypes.func,
    deleteProduct: PropTypes.func
}

export default ProductListComponent;