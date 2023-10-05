require('dotenv').config();
const Neode = require('neode');
const Person = require('./models/person');

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

const instance = new Neode(uri, user, password);

async function main(){
    instance.model('Person', Person);
    // const person = await instance.create('Person', { name: 'Santiago' });
    const persons = await instance.all('Person');
    console.log(await persons.toJson());
}

main();