const instance = require('../libs/neode');

class PersonService {
    constructor() {}
  
    async create( name ) {
        const personDB = await instance.create('Person', { name });
        const newPerson = await personDB.toJson();
        return newPerson;
    }
  
    async find() {
        const persons = await instance.all('Person');
        const finalPersons = await persons.toJson();
        return finalPersons;
    }
  
    async findOne(person_id) {
        const personDB = await instance.first('Person', { person_id });
        if ( !personDB ) throw new Error(`Person with person_id ${ person_id } does not exists`);
        const parsedPerson = await personDB.toJson();
        return parsedPerson;
    }
  
    async update(person_id, changes) {
        const personDB = await instance.first('Person', { person_id });
        if ( !personDB ) throw new Error(`Person with person_id ${ person_id } does not exists`);
        await personDB.update(changes);
        return personDB.toJson();
    }
  
    async delete(person_id) {
      const personDB = await instance.first('Person', { person_id });
      if ( !personDB ) throw new Error(`Person with person_id ${ person_id } does not exists`);
      await personDB.delete();
      return true;
    }
  }
  
  module.exports = PersonService;