const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modelSchema = new Schema(
    {
        id: { type: Number, required: true, unique: true },
        name: String,
    }
);

const Model = mongoose.model('model', modelSchema);

module.exports = Model;