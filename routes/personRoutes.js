// routes/person.js
const express = require('express');
const router = express.Router();
const Person = require('../models/person');

// POST route to create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});

// GET route to fetch all persons
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});

// GET route to fetch persons by work type
router.get('/:work', async (req, res) => {
    try {
        const workType = req.params.work;
        const persons = await Person.find({ work: workType });
        res.json(persons);
    } catch (error) {
        console.log('error fetching the data', error);
        res.status(500).json({ error: 'internal server error' });
    }
});

// PUT route to update a person by ID
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedData = req.body;
        const updatedPerson = await Person.findByIdAndUpdate(personId, updatedData, { new: true });
        if (!updatedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log('data updated');
        res.status(200).json(updatedPerson);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});

// DELETE route to delete a person by ID
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const deletedPerson = await Person.findByIdAndDelete(personId);
        if (!deletedPerson) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log('data deleted');
        res.status(200).json({ message: "Person deleted successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
});

module.exports = router;
