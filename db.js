const mongoose = require('mongoose');

module.exports = () => {
	const connectionPararms = {
			useNewUrlParser: true,
			useUnifiedTopology: true,

	};
	try{
		mongoose.connect(process.env.DB, connectionPararms);
		console.log('Connected to database successfuly')
	} catch(error) {
		console.log(error);
		console.log("could not connect to database!")

	}
};