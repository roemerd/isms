const Slack = require('slack-webhook');


const webhook = new Slack('https://hooks.slack.com/services/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', {
	defaults: {
		username: 'Bot',
		channel: '#isms',
		icon_emoji: ':penguin:'
	}
})
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getRandomJoke(person){
	try{
		let jokes = require('../../utility/isms');
		if(person.length) {
			jokes = jokes.filter(j => j.tags.includes(person));
		}
		let joke = {};
		const min = 0;
		const max = jokes.length - 1	;
		while(true){
			const idx = getRandomInt(min, max);
			joke = jokes[idx];
			return await webhook.send({text: joke.text, attachments: joke.attachments});
		}
	} catch(e) {
		return JSON.stringify(e);
	}
}



module.exports = {
	getRandomJoke
};