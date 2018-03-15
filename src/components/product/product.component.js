import React from 'react';
import PropTypes from 'prop-types';

import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import ContentEditable from 'react-contenteditable';
import SvgIcon from 'material-ui/SvgIcon';
import { blue500 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

const ProductComponent = (props) => {
    const { product, handleChange, editProduct, deleteProduct } = props;

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
        <TableRow>
            <TableRowColumn>
                <EditIcon
                    className="edit_icon"
                    style={iconStyles}
                    color={blue500}
                />
                <ContentEditable
                    html={product.name}
                    className="edit_area"
                    onChange={handleChange.bind(
                        null,
                        product._id,
                        'name',
                    )}
                />
            </TableRowColumn>
            <TableRowColumn>
                <EditIcon
                    className="edit_icon"
                    style={iconStyles}
                    color={blue500}
                />
                <ContentEditable
                    html={product.quantity}
                    className="edit_area"
                    onChange={handleChange.bind(
                        null,
                        product._id,
                        'quantity',
                    )}
                />
            </TableRowColumn>
            <TableRowColumn>
                <EditIcon
                    className="edit_icon"
                    style={iconStyles}
                    color={blue500}
                />
                <span className="currency">$</span>
                <ContentEditable
                    html={product.price}
                    className="edit_area"
                    onChange={handleChange.bind(
                        null,
                        product._id,
                        'price',
                    )}
                />
            </TableRowColumn>
            <TableRowColumn>
                <RaisedButton className="shop_delete_button"
                    onClick={deleteProduct.bind(null, product._id)}
                    type="submit"
                    label="Delete"
                    primary={true}
                />
                <RaisedButton className="shop_edit_button"
                    onClick={editProduct.bind(null, product)}
                    type="submit"
                    label="Edit"
                    primary={true}
                />
            </TableRowColumn>
        </TableRow>
    )
}

ProductComponent.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        _id: PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number
    }),
    handleChange: PropTypes.func,
    editProduct: PropTypes.func,
    deleteProduct: PropTypes.func
}

export default ProductComponent;