const upload = require('../../services/file-upload');

const singleUpload = upload.single('image'); //key for server

export const Upload = (req, res)=> {
    singleUpload(req, res, function(err){
        if(err){
            return res.status(422).send({errors: [{title: 'File upload error', details: err.message}]})
        }
        return res.json({'imageURL': req.file.path})
    })
};


