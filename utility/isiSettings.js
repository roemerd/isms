/* eslint no-console: 0 */
/*
	DEPENDENCIES ----------------------------------------------------------------------------------------------------------
*/

const settingCollection = require('./settings/isiSettings.json');

/*
	ENVIRONMENT SETUPS ----------------------------------------------------------------------------------------------
*/

let environment = 'local';

const apiSettings = settingCollection[environment];


/*
	FUNCTIONS --------------------------------------------------------------------------------------------------------
*/


function loggerConfig() {
	return apiSettings.logger;
}


function slackWinston() {
	return apiSettings.slackWinston;
}


function getPort() {
	return apiSettings.port;
}




/*
	EXPORTS ----------------------------------------------------------------------------
*/

const publicFunctions = {
	loggerConfig,
	slackWinston,
	getPort
};

module.exports = publicFunctions;