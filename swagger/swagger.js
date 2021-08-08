const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const port = process.env.PORT;

const swaggerOptions = {
  definition: {
    openapi: '3.0.2',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'API to create users and allow them to manage their tasks',
      contact: {
        name: 'Matthew Kale',
        email: 'matthewjkale@gmail.com',
      },
      servers: [port],
    },
  },
  apis: ['./swagger/api.yaml'],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = {
  swaggerUI,
  swaggerOptions,
  swaggerDocs,
};
