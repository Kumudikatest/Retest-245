let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.scan({
        TableName: 'test',
        ExpressionAttributeValues: {
            ':Age': 14,
            ':Name': 'NaN'
        }
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });
    ddb.scan({
        TableName: 'test',
        ExpressionAttributeValues: {
            ':Subject': 'NaN'
        }
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });


    callback(null, { "message": "Successfully executed" });
}