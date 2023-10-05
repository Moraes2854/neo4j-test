require('dotenv').config();
const Neode = require('neode');
const config = require('../config');
const setupModels = require('../db/neo4j/models');


const uri = config.neo4jUri;
const user = config.neo4jUser;
const password = config.neo4jPassword;

const instance = new Neode(uri, user, password);
setupModels( instance );

module.exports = instance;