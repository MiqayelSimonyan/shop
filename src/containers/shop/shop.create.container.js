import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShopCreateComponent from '../../components/shop/shop.create.component';
import { createShop } from '../../middlewars/shop.middleware';

class ShopCreateContainer extends Component {
    state = {
        isOpen: false
    }

    handleChange = chips => {
        this.setState({ shops: chips.map(chip => ({ name: chip })) });
    }

    createShopToggle = () => {
        this.setState(state => {
            return {
                isOpen: !state.isOpen
            }
        });
    }

    createShop = event => {
        event.preventDefault();
        if (this.state.shops) {
            this.props.createShop('/api/shop', { shops: this.state.shops });
            this.setState({ isOpen: false });
        }
    }

    render() {
        return (
            <div>
                <ShopCreateComponent
                    shops_state={this.state && this.state.shops}
                    handleChange={this.handleChange}
                    createShop={this.createShop}
                    createShopToggle={this.createShopToggle}
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
        createShop: (url, shops) => {
            dispatch(createShop(url, shops));
        }
    })
)(ShopCreateContainer);