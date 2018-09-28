import mongoose from 'mongoose';
import {DemoSchema} from '../../models/demoModel';
import {ResponseHandler} from '../../handlers/responseHandler';

const Demo = mongoose.model('Demo', DemoSchema, 'photos');

//GET
export const get = (req, res) => {
    Demo.find({}, (err, data) => ResponseHandler(res, err, data));
};

//GET BY ID
export const getById = (req, res) =>{
    Demo.findById({_id: req.params.id}, (err, data)=> ResponseHandler(res, err, data));
}

//POST
export const post = (req, res) => {
    let data = new Demo(req.body);
    data.save((err, contact) => ResponseHandler(res, err, data))
}

//PUT 
export const put = (req, res) => {
    Demo.findOneAndUpdate({_id: req.params.id}, 
        req.body, {new: true}, (err,data) => ResponseHandler(res, err, data, 'PUT'));    
}

//DELETE
export const _delete = (req, res) => {
    Demo.remove({_id: req.params.id}, (err,data) => ResponseHandler(res, err, data, 'DELETE'));
}


