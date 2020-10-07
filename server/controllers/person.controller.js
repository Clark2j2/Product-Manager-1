const { request, response } = require('express');
const { prependOnceListener } = require('../../../../Assignments/HelloMongoose/server/models/user.model');
const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    Person.find()
    .then(allDaUsers => response.json({ index: allDaUsers }))
    .catch(err => response.json({ message: "Something went wrong", error: err }));
}

module.exports.createPerson = (request, response) => {
    const { title, price, description } = request.body;
    Person.create({
        title,
        price,
        description
    })
    .then(person=>response.json(person))
    .catch(err=>response.json(err))
}

module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}
