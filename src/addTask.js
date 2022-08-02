const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addTask = async(event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const {title, description} = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();

    const newTask = {
    id,
    title,
    description,
    createdAt,
    done: false,
    }

    await dynamodb.put({
    TableName: 'TaskTable',
    Item: newTask
    }).promise()

    return {
    statusCode: 200,
    body: JSON.stringify(newTask)
    }  


/*    const newTask = {
    TableName: 'TaskTable',
    Item: {
        id,
        title,
        description,
        createdAt
    }
 
  };

let output = "";

  dynamodb.put( newTask, (error, data) => {
   if(error) {
    console.log("Unable to save data, error: ", JSON.stringify(error, null, 2));
    output = JSON.stringify(error, null, 2);
   } else{
    console.log("saving data:: ", JSON.stringify(data, null, 2));
    output = JSON.stringify(data, null, 2);
   }
  });  

  return {
    statusCode: 202,
    output: output,
    body: JSON.stringify(newTask)
  } */

 
}


module.exports = {
    addTask,
}