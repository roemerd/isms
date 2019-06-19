const express = require('express');
const app = express();

let isiRoutes;
isiRoutes = require('./routes/isiRoutes').isi;
app.use('/', isiRoutes);

//listen
const server = app.listen(8000).on('listening', () => {
	console.log(`ISI App listening on port ${server.address().port}`);
});