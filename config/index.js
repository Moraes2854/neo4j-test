require('dotenv').config();


const config = {
  baseUrl: process.env.BASE_URL,
  port: process.env.PORT || '3000',
  neo4jUri: process.env.NEO4J_URI,
  neo4jUser: process.env.NEO4J_USERNAME,
  neo4jPassword: process.env.NEO4J_PASSWORD,
};

module.exports = config;
