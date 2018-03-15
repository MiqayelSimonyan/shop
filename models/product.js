import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        name: { type: String, trim: true, required: true },
        quantity: { type: Number, trim: true, required: true },
        price: { type: Number, trim: true, required: true }
    },
    {
        timestamps: true
    }
);

mongoose.model('Product', ProductSchema);