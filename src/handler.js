'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hi I am Shirley',
        input: event,
      },
      null,
      2
    ),
  };
};
