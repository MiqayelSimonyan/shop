import React, { Component } from 'react';
import { connect } from 'react-redux';

import AlertContainer from '../alert/alert.container';
import ShopListComponent from '../../components/shop/shop.list.component';

import { getShops, getShop, updateShop, deleteShop, deleteProduct } from '../../middlewars/shop.middleware';
import { updateProduct } from '../../middlewars/product.middleware';

class ShopContainer extends Component {
    state = {}

    componentDidMount() {
        this.props.getShops('/api/shops');
    }

    handleChange = (id, field, event) => {
        this.setState({ [id]: { name: event.target.value } })
    }

    editShop = (id) => {
        if (this.state[id] && this.state[id].name) this.props.updateShop(`/api/shop/${id}`, { name: this.state[id].name });
    }

    deleteShop = (id) => {
        let shopDelete = confirm('Do you want to delete shop');
        if (shopDelete) this.props.deleteShop(`/api/shop/${id}`);
    }

    render() {
        return (
            <div className="container">
                {this.props.errors && this.props.errors.length ? (
                    <AlertContainer errors={this.props.errors} duration="8000" />
                ) : this.props.success && this.props.success.length ? (
                    <AlertContainer errors={this.props.success} duration="8000" />
                ) : (
                            ''
                        )}

                <ShopListComponent
                    shops={this.props.shops}
                    handleChange={this.handleChange}
                    editShop={this.editShop}
                    deleteShop={this.deleteShop}
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
        getShop: (url, id) => {
            dispatch(getShop(url, id))
        },
        updateShop: ((url, data) => {
            dispatch(updateShop(url, data))
        }),
        deleteShop: url => {
            dispatch(deleteShop(url))
        },
        updateProduct: (url, data) => {
            dispatch(updateProduct(url, data))
        },
        deleteProduct: url => {
            dispatch(deleteProduct(url))
        }
    })
)(ShopContainer);