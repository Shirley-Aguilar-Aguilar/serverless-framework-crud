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
    createdAt
  }

/*   const newTask = {
    tableName: 'TaskTable',
    Item: {
        id,
        title,
        description,
        createdAt
    }
 
  };

  dynamodb.put( newTask, (error, data) => {
   if(error) {
    console.log("Unable to save data, error: ", JSON.stringify(error, null, 2));
   } else{
    console.log("saving data:: ", JSON.stringify(data, null, 2));
   }
  }); */

    await dynamodb.put({
    TableName: 'TaskTable',
    Item: newTask
  }).promise()

  return {
    statusCode: 200,
    body: JSON.stringify(newTask)
  } 
}


module.exports = {
    addTask,
}