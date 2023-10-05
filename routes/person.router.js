const express = require('express');

const PersonService = require('../services/person.service');
const router = express.Router();
const personService = new PersonService();

router.get('/', 
  async (req, res, next) => {
    try {
      const persons = await personService.find();
      return res.status(200).json(persons);
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const person = await personService.findOne(id);
      return res.status(200).json(person);
    } catch (error) {
      next(error);
    }
  }
);


router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const isDeleted = await personService.delete(id);
      const statusCode = 201;
      return res.status(statusCode).json(isDeleted);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  async (req, res, next) => {
    try {
      const { body } = req;
      if ( !body.name ) throw new Error(`Name is needed to create an person`)
      const newPerson = await personService.create( body.name );
      const statusCode = 201;
      return res.status(statusCode).json(newPerson);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
