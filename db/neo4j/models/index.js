const PersonSchema = require('../schemas/person.schema');

function setupModels( instance ){
    instance.model('Person', PersonSchema);
}

module.exports = setupModels;