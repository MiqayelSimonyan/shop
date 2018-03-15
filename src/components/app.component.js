import React from 'react';
import Paper from 'material-ui/Paper';

import ShopContainer from '../containers/shop/shop.container';

export default () => {
    const style = {
        margin: 20,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    };

    return (
        <div>
            <Paper style={style} zDepth={0}>
                <ShopContainer />
            </Paper>
        </div>
    );
};