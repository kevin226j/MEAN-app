import mongoose, { Collection } from 'mongoose';

const Schema = mongoose.Schema;

export const DemoSchema = new Schema({
    thumbURL : {
        type: String,
        required: true
    },
    fullURL : {
        type: String,
        required: true
    },
    caption : {
        type: String,
        required: true
    },
});
