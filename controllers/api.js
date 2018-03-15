import express from 'express';
import mongoose from 'mongoose';

const Shop = mongoose.model('Shop');
const Product = mongoose.model('Product');

const router = module.exports = express.Router();

/* shop */
router.get('/shops', (req, res) => {
    Shop.find({})
        .populate('products')
        .exec()
        .then(shops => {
            res.send({ status: 200, shops });
        })
        .catch(err => {
            return next(err);
        });
});

router.post('/shop', (req, res, next) => {
    const { shops } = req.body;

    Shop.insertMany(shops, { runValidators: true })
        .then((shops) => {
            res.send({
                type: 'success',
                status: 200,
                message: 'Shop created',
                shop: shops
            });
        })
        .catch(err => {
            return next({
                type: 'error',
                status: 400,
                message: err
            });
        });
});

router.get('/shop/:id', (req, res, next) => {
    const { id } = req.params;

    Shop.findOne({ _id: id })
        .populate('products')
        .exec()
        .then(shop => {
            res.send({
                status: 200,
                shop: {
                    _id: shop._id,
                    name: shop.name,
                    products: shop.products
                }
            });
        })
        .catch(err => {
            return next(err);
        });
});

router.put('/shop/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    Shop.update({ _id: id },
        { name },
        { runValidators: true })
        .exec()
        .then(shop => {
            Shop.findOne({ _id: id })
                .populate('products')
                .exec((err, shop) => {
                    res.send({
                        type: 'success',
                        status: 200,
                        message: 'Shop updated',
                        shop: {
                            _id: shop._id,
                            name: shop.name,
                            products: shop.products
                        }
                    });
                })
        })
        .catch(err => {
            return next(err);
        });
});

router.delete('/shop/:id', (req, res) => {
    const { id } = req.params;

    Shop.remove({ _id: id })
        .exec()
        .then(shop => {
            res.send({
                status: 200,
                message: 'Shop removed',
                _id: id
            });
        })
        .catch(err => {
            return next(err);
        });
});

/* product */
router.post('/product', (req, res, next) => {
    const { product, shopId } = req.body;

    new Product(product)
        .save((err, product) => {
            if (err)
                return next({
                    type: 'error',
                    status: 400,
                    message: err
                });
            if (shopId) {
                Shop.update({ _id: shopId },
                    { $addToSet: { products: product._id } },
                    { runValidators: true })
                    .exec()
                    .then(shop => {
                        Shop.findOne({ _id: shopId })
                            .populate('products')
                            .exec()
                            .then(shop => {
                                res.send({
                                    status: 200,
                                    message: 'Product created',
                                    shop
                                });
                            })
                            .catch(err => {
                                return next(err);
                            });
                    })
                    .catch(err => {
                        return next(err);
                    });
            }
        });
});

router.put('/product/:id', (req, res) => {
    const { id } = req.params;
    const { name, quantity, price } = req.body;

    Product.update({ _id: id },
        { $set: { name, quantity, price } })
        .exec()
        .then(product => {
            Product.findOne({ _id: id })
                .exec((err, product) => {
                    res.send({
                        type: 'success',
                        status: 200,
                        message: 'Product updated',
                        product: {
                            _id: product._id,
                            name: product.name,
                            quantity: product.quantity,
                            price: product.price
                        }
                    });
                })
        })
        .catch(err => {
            return next(err);
        });
});

router.delete('/product/:id', (req, res) => {
    const { id } = req.params;

    Product.remove({ _id: id })
        .exec()
        .then(product => {
            Shop.update(
                { products: { $in: [mongoose.Types.ObjectId(id)] } },
                { $pull: { products: mongoose.Types.ObjectId(id) } },
                { multi: true }
            )
                .exec()
                .then(data => {
                    res.send({
                        status: 200,
                        message: 'Product removed',
                        _id: id
                    });
                })
                .catch(err => {
                    return next(err);
                });
        })
        .catch(err => {
            return next(err);
        });
});