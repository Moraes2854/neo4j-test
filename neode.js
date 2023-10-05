require('dotenv').config();
const Neode = require('neode');
const Person = require('./models/person');

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

const instance = new Neode(uri, user, password);

async function main(){
    instance.model('Person', Person);
    await createSeveral();
    const persons = await findAll();
    console.log(persons);
}

async function createSeveral(){
    await instance.create('Person', { name: 'Santiago' });
    await instance.create('Person', { name: 'Juan' });
    await instance.create('Person', { name: 'Martin' });
    await instance.create('Person', { name: 'Pablo' });
    await instance.create('Person', { name: 'Mariano' });
}

async function findAll(){
    const persons = await instance.all('Person');
    const finalPersons = await persons.toJson();
    return finalPersons;
}

async function deleteAll(){
    await instance.deleteAll('Person');
}

main();