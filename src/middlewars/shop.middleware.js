import shortid from 'shortid';

import {
    AddShops,
    AddShop,
    UpdateShop,
    DeleteShop,
    AddProduct,
    DeleteProduct
} from '../actions/shop.action';
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

export function getShops(url) {
    return dispatch => {
        fetch(url, { method: 'GET' })
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
                dispatch(AddShops(data.shops));
            });
    };
}

export function getShop(url) {
    return dispatch => {
        fetch(url, { method: 'GET' })
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
                dispatch(AddShop(data.shop));
            });
    };
}

export function createShop(url, shop) {
    return dispatch => {
        fetch(url, config('POST', shop))
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
                dispatch(AddShop(data.shop));
                dispatch(Success({ id: shortid.generate(), message: data.message }));
            })
            .catch(err => {
                dispatch(Failed({ id: shortid.generate(), message: err }));
            });
    };
}

export function updateShop(url, shop) {
    return dispatch => {
        fetch(url, config('PUT', shop))
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
                dispatch(UpdateShop(data.shop));
                dispatch(Success({ id: shortid.generate(), message: data.message }));
            })
            .catch(err => {
                dispatch(Failed({ id: shortid.generate(), message: err }));
            });
    };
}

export function deleteShop(url, id) {
    return dispatch => {
        fetch(url, config('DELETE', id))
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
                dispatch(DeleteShop(data));
                dispatch(Success({ id: shortid.generate(), message: data.message }));
            })
            .catch(err => {
                dispatch(Failed({ id: shortid.generate(), message: err }));
            });
    };
}

export function createProduct(url, product) {
    return dispatch => {
        fetch(url, config('POST', product))
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
                dispatch(AddProduct(data.shop));
                dispatch(Success({ id: shortid.generate(), message: data.message }));
            })
            .catch(err => {
                dispatch(Failed({ id: shortid.generate(), message: err }));
            });
    };
}

export function deleteProduct(url, id) {
    return dispatch => {
        fetch(url, config('DELETE', id))
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
                dispatch(DeleteProduct(data));
                dispatch(Success({ id: shortid.generate(), message: data.message }));
            })
            .catch(err => {
                dispatch(Failed({ id: shortid.generate(), message: err }));
            });
    };
}