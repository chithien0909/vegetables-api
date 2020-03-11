const mongoose = require('mongoose');
const { Schema } = require('mongoose');
require('mongoose-double')(mongoose);

const unitEnum = require('../constant/unitEnum');

const SchemaTypes = mongoose.Schema.Types;
const productSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Name product is required'],
    trim: true,
    unique: true
  },
  ratingAverage: {
    min: 0,
    type: SchemaTypes.Double,
    default: 0
  },
  ratingsQuantity: [
    {
      userId: SchemaTypes.ObjectId,
      ratingAt: Date,
      rate: {
        type: Number,
        min: [0, 'Least 0 star'],
        max: [6, 'Max 6 star']
      }
    }
  ],
  price: {
    type: SchemaTypes.Double,
    require: [true, 'Price is required']
  },
  discount: {
    price: SchemaTypes.Double,
    start: Date,
    endDate: Date
  },
  createAt: {
    type: Date,
    default: Date.now()
  },
  harvestedAt: {
    type: Date
  },
  description: {
    type: String,
    trim: true
  },
  summary: {
    type: String,
    trim: true
  },
  farm: {
    type: SchemaTypes.ObjectId
  },
  images: {
    type: [String],
    default: [],
    require: [true, 'Image is required']
  },
  imageCover: {
    type: [String],
    default: [],
    require: [true, 'Image cover is required']
  },
  size: {
    type: Number,
    default: 1,
    require: true
  },
  quantity: {
    type: Number,
    min: 0,
    require: [true, 'Quantity is required']
  },
  unit: {
    type: String,
    enum: [unitEnum.Kg, unitEnum.Mg, unitEnum.Ton, unitEnum.Litter],
    default: unitEnum.Kg
  },
  sold: {
    type: Number,
    default: 0
  },
  organic: {
    type: Boolean,
    default: false
  },
  category: {
    type: Number,
    require: [true, 'Category is required']
  },
  storageTime: {
    type: Date,
    require: [true, 'Storage Time is required']
  },
  expireDate: {
    type: Date,
    require: [true, 'Expire date is required']
  }
});

const Product = mongoose.model('Product', productSchema, 'Product');
module.exports = Product;
