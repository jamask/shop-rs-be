const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: 'eu-west-1' });

const BUCKET = 'rsschool-task-5-nodeaws';
const params = {
  Bucket: BUCKET,
  Prefix: 'import/'
}

module.exports = {
  importProductsFile: async function(event) {
    
  }
}