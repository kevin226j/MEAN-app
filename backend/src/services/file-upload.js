const  aws = require('aws-sdk');
const  multer = require('multer');
const  multerS3 = require('multer-s3');
require('dotenv').config();

aws.config.update({
    secretAccessKey: process.env.AWS_SECRETKEY,
    accessKeyId: process.env.AWS_ACCESSKEYID,
    region: process.env.AWS_REGION
})

const  s3 = new aws.S3()

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true)
  } else {
    cb(new Error('Invalid Mime type, only use JPEG and PNG'), false);
  }
}
 
const  upload = multer({
  fileFilter,
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET,
    acl:'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING!'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;