import React from 'react';
import PropTypes from 'prop-types';

import ChipInput from 'material-ui-chip-input';
import RaisedButton from 'material-ui/RaisedButton';

const ShopCreateComponent = props => {
    const { handleChange, shops_state, createShop, createShopToggle, isOpen } = props;

    const style = {
        margin: '12px 0',
    };

    const addShopButton = {
        margin: '12px 0 30px 0',
        height: '45px'
    }

    return (
        <div className="container">
            {isOpen ?
                <div>
                    <div className="add_shop_wrapper">
                        <span>press enter after you have add shop</span><br />
                        <ChipInput floatingLabelText="add shop"
                            onChange={(chips) => handleChange(chips)}
                        />
                    </div>
                    <RaisedButton
                        label="Add shops"
                        primary={true}
                        style={style}
                        disabled={!shops_state}
                        onClick={createShop}
                    />
                </div>
                : ''}
            <div className="shop_wrapper_bottom">
                <RaisedButton
                    type="submit"
                    label={!isOpen ? 'Show add Shops' : 'Hide add Shops'}
                    primary={true}
                    style={addShopButton}
                    onClick={createShopToggle}
                />
            </div>
        </div>
    );
};

ShopCreateComponent.propTypes = {
    handleChange: PropTypes.func,
    createShop: PropTypes.func,
    createShopToggle: PropTypes.func,
    isOpen: PropTypes.bool,
    shops_state: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string
        })
    )
}

export default ShopCreateComponent;