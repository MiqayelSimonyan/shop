import React from 'react';
import PropTypes from 'prop-types';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import ProductListComponent from '../product/product.list.component';
import ProductCreateContainer from '../../containers/product/product.create.container';

const ShopInnerComponent = props => {
    const { currentShop, totalPrice, editProduct, deleteProduct, handleChange } = props;

    return (
        currentShop ?
            <div>
                <h3 className="current_shop_name">{currentShop.name ? currentShop.name : ''}</h3>
                {
                    currentShop.products && currentShop.products.length ?
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>NAME</TableHeaderColumn>
                                    <TableHeaderColumn>QTY</TableHeaderColumn>
                                    <TableHeaderColumn>PRICE</TableHeaderColumn>
                                    <TableHeaderColumn></TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <ProductListComponent
                                    shop={currentShop}
                                    handleChange={handleChange}
                                    editProduct={editProduct}
                                    deleteProduct={deleteProduct}
                                />
                                <TableRow>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn></TableRowColumn>
                                    <TableRowColumn>
                                        <div className="total_price">
                                            Total Price <br />
                                            <b>${totalPrice}</b>
                                        </div>
                                    </TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                        : ''
                }
                <ProductCreateContainer shop={currentShop} />
            </div> : ''

    )
}

ShopInnerComponent.propTypes = {
    currentShop: PropTypes.shape({
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
    totalPrice: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.array,
    ]),
    editProduct: PropTypes.func,
    deleteProduct: PropTypes.func,
    handleChange: PropTypes.func,
}

export default ShopInnerComponent;