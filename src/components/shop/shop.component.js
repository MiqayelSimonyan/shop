import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import SvgIcon from 'material-ui/SvgIcon';
import { blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import ContentEditable from 'react-contenteditable';

const ShopComponent = props => {
    const { id, shop, editShop, deleteShop, handleChange } = props;
    const iconStyles = {
        width: 19,
        position: 'relative',
        top: '3px',
        marginRight: '10px',
        cursor: 'pointer'
    };

    const EditIcon = (props) => (
        <SvgIcon {...props}>
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </SvgIcon>
    );

    return (
        <li>
            <NavLink exact to={`/shop/${id}`}>
                <EditIcon
                    className="edit_icon"
                    style={iconStyles}
                    color={blue500}
                />
            </NavLink>
            <ContentEditable
                html={shop.name}
                className="edit_area"
                onChange={handleChange.bind(
                    null,
                    shop._id,
                    'name'
                )}
            />

            <RaisedButton className="shop_delete_button"
                onClick={deleteShop.bind(null, shop._id)}
                type="submit"
                label="Delete"
                primary={true}
            />
            <RaisedButton className="shop_edit_button"
                onClick={editShop.bind(null, shop._id)}
                type="submit"
                label="Edit"
                primary={true}
            />
        </li>
    )
};

ShopComponent.propTypes = {
    id: PropTypes.string,
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
    editShop: PropTypes.func,
    deleteShop: PropTypes.func,
    handleChange: PropTypes.func
}

export default ShopComponent;