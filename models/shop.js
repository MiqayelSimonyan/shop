import mongoose from 'mongoose';
const deepPopulate = require('mongoose-deep-populate')(mongoose);

const ShopSchema = mongoose.Schema(
    {
        name: { type: String, trim: true, required: true, unique: true },
        products: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Product'
        }]
    },
    {
        timestamps: true
    }
);

ShopSchema.plugin(deepPopulate);
mongoose.model('Shop', ShopSchema);