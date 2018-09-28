import mongoose from 'mongoose';
import {DemoSchema} from '../../models/demoModel';

const Demo = mongoose.model('Demo', DemoSchema, 'photos');

//GET
export const get = (req, res) => {
    Demo.find({}, (err, data) => {
        if(err) res.send(err);
        res.json(data);
    });
};

//GET BY ID
export const getById = (req, res) =>{
    Demo.findById({_id: req.params.id}, (err, data)=>{
        if(err) res.send(err);
        res.json(data);
    })
}

//POST
export const post = (req, res) => {
    let data = new Demo(req.body);
    data.save((err, contact)=>{
        if(err) res.send(err);
        res.json(data);
    })
}

//PUT 
export const put = (req, res) => {
    Demo.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (err,data)=>{
        if(err) res.send(err);
        res.json(data);
    })    
}

//DELETE
export const _delete = (req, res) => {
    Demo.remove({_id: req.params.id}, (err, data)=>{
        if(err) res.send(err);
        res.json({message: 'Successfully deleted item.'})
    })
}


