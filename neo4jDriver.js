require('dotenv').config();
const neo4j = require('neo4j-driver');

const uri = process.env.NEO4J_URI;
const user = process.env.NEO4J_USERNAME;
const password = process.env.NEO4J_PASSWORD;

async function main(){
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    const session = driver.session()
    const personName = 'Santiago'
    try {
      const result = await session.run(
        'CREATE (a:Person {name: $name}) RETURN a',
        { name: personName }
      )
    
      const singleRecord = result.records[0]
      const node = singleRecord.get(0)
    
      console.log({
        singleRecord,
        node
      });
    } finally {
      await session.close()
    }
}

main();