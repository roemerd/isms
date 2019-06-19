/*
	DEPENDENCIES ----------------------------------------------------------------------------------------------------------------------------
*/

const express = require('express');
const isi = express.Router();

const jokeService = require('../model/services/jokeService');

isi.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//convert query params to lowercase
isi.use((req, res, next) => {
	for(var key in req.query) {
		req.query[key.toLowerCase()] = req.query[key];
	}

	next();
});

/**
	* @name Hello World
	* @route {GET} / - 'Hello World' for application uptime indicator
	* @returns {TEXT} - greeting message
*/
isi.get('/', (req, res) => {
	return res.send('Hello! Welcome to the NodeJS ISI application!');
});

isi.get('/joke/person/:person?', async (req, res) => {
	const person = (req.params.person?req.params.person:'');
	const response =  await res.status(jokeService.getRandomJoke(person));
	return res.status(200).json(`${(req.params.person?person:'Random')} sent successfully!`);
});


/*
	EXPORTS ------------------------------------------------------------------------------------------------------------------------------------------------
*/

const publicFunctions = {
	isi
};

module.exports =  publicFunctions;