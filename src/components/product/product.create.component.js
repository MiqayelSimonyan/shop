import React from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const ProductCreateComponent = props => {
    const { handleChange, name, quantity, price, createProduct, createProductToggle, isOpen } = props;

    const style = {
        margin: '12px 0',
    };

    const addProductButton = {
        margin: '12px 0 30px 0',
        height: '45px'
    }

    return (
        <div className="container">
            {isOpen ?
                <div>
                    <div className="add_product_wrapper">
                        <div>
                            <TextField
                                hintText="product name"
                                onChange={handleChange.bind(null, 'name')}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="product quantity"
                                onChange={handleChange.bind(null, 'quantity')}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="product price"
                                onChange={handleChange.bind(null, 'price')}
                            />
                        </div>
                    </div>
                    <RaisedButton
                        label="Add products"
                        primary={true}
                        style={style}
                        disabled={!name || !quantity || !price}
                        onClick={createProduct}
                    />
                </div>
                : ''}
            <div className="product_wrapper_bottom">
                <RaisedButton
                    type="submit"
                    label={!isOpen ? 'Show add Products' : 'Hide add Products'}
                    primary={true}
                    style={addProductButton}
                    onClick={createProductToggle}
                />
            </div>
        </div>
    );
};

ProductCreateComponent.propTypes = {
    handleChange: PropTypes.func,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    createProduct: PropTypes.func,
    createProductToggle: PropTypes.func,
    isOpen: PropTypes.bool
}

export default ProductCreateComponent;