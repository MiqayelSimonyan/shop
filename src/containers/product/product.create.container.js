import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCreateComponent from '../../components/product/product.create.component';
import { createProduct } from '../../middlewars/shop.middleware';

class ProductCreateContainer extends Component {
    state = {
        isOpen: false
    }

    handleChange = (field, event) => {
        this.setState({ [field]: event.target.value });
    }

    createProductToggle = () => {
        this.setState(state => {
            return {
                isOpen: !state.isOpen
            }
        });
    }

    createProduct = event => {
        const { name, quantity, price } = this.state;
        const product = { name, quantity, price };
        const shopId = this.props.shop._id;

        event.preventDefault();
        if (product) {
            this.props.createProduct('/api/product', { product, shopId });
            this.setState({ isOpen: false });
        }
    }

    render() {
        return (
            <div style={{ width: '32%' }}>
                <ProductCreateComponent
                    name={this.state.name}
                    quantity={+this.state.quantity}
                    price={+this.state.price}
                    handleChange={this.handleChange}
                    createProduct={this.createProduct}
                    createProductToggle={this.createProductToggle}
                    isOpen={this.state.isOpen}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        errors: state.Errors,
        success: state.Success
    }),
    dispatch => ({
        createProduct: (url, user) => {
            dispatch(createProduct(url, user));
        }
    })
)(ProductCreateContainer);