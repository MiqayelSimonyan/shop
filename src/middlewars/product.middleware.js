import shortid from 'shortid';

import { UpdateProduct } from '../actions/product.action';
import { Success, Failed } from '../actions/shared.action';

const config = (method, data) => {
    return {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method,
        credentials: 'include',
        body: JSON.stringify(data)
    };
};

export function updateProduct(url, product) {
    return dispatch =>
        fetch(url, config('PUT', product))
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data.status && data.status !== 200)
                    throw new Error(
                        data.message && data.message.message
                            ? data.message.message
                            : data.message
                    );
                dispatch(UpdateProduct(data));
                dispatch(Success({ id: shortid.generate(), message: data.message }));
            })
            .catch(err => {
                dispatch(Failed({ id: shortid.generate(), message: err }));
            })
}