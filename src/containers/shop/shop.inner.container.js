import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlertContainer from '../alert/alert.container';
import ShopInnerComponent from '../../components/shop/shop.inner.component';
import { getShops, deleteProduct } from '../../middlewars/shop.middleware';
import { updateProduct } from '../../middlewars/product.middleware';

class ShopInnerContainer extends Component {
    state = {}

    componentDidMount() {
        this.props.getShops('/api/shops/');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shops != this.props.shops) {
            this.getTotalPrice(nextProps, false);
        }
    }

    handleChange = (id, field, event) => {
        this.setState({ [id]: { ...this.state[id], [field]: event.target.value } });
    }

    getTotalPrice(nextProps, editProduct, productId, productName, productQuantity, productPrice) {
        let currentShop;
        if (!editProduct) {
            currentShop = nextProps.shops.find(shop => shop._id === this.props.match.params.id);
        } else {
            if (productPrice || productQuantity) {
                currentShop = { ...this.state.currentShop };

                currentShop.products = currentShop.products.map(product => {
                    if (product._id == productId) {
                        product.price = +productPrice || +product.price;
                        product.quantity = +productQuantity || +product.quantity;
                        return product;
                    } else {
                        return product;
                    }
                });
            }
        }

        let totalPrice;
        currentShop && currentShop.products ? totalPrice = currentShop.products.reduce((result, product) => +result + product.price * product.quantity, []) : '';
        if (currentShop) this.setState({ currentShop, totalPrice });
    }

    editProduct = product => {
        const id = product._id;
        const { name, quantity, price } = this.state[id] || product;

        this.props.updateProduct(`/api/product/${id}`, {
            name: name || product.name,
            quantity: quantity || product.quantity,
            price: price || product.price
        });
        this.getTotalPrice(null, true, id, name, quantity, price);
    }

    deleteProduct = id => {
        let productDelete = confirm('Do you want to delete product');
        if (productDelete) this.props.deleteProduct(`/api/product/${id}`);
    }

    render() {
        const { currentShop, totalPrice } = this.state;

        return (
            <div className="container">
                {this.props.errors && this.props.errors.length ? (
                    <AlertContainer errors={this.props.errors} duration="8000" />
                ) : this.props.success && this.props.success.length ? (
                    <AlertContainer errors={this.props.success} duration="8000" />
                ) : (
                            ''
                        )}

                <ShopInnerComponent
                    {...this.props}
                    currentShop={currentShop}
                    totalPrice={totalPrice}
                    editProduct={this.editProduct}
                    deleteProduct={this.deleteProduct}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        shops: state.Shops,
        errors: state.Errors,
        success: state.Success
    }),
    dispatch => ({
        getShops: url => {
            dispatch(getShops(url))
        },
        updateProduct: (url, data) => {
            dispatch(updateProduct(url, data))
        },
        deleteProduct: url => {
            dispatch(deleteProduct(url))
        }
    })
)(ShopInnerContainer);