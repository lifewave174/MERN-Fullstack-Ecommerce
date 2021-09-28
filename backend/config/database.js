const mongoose = require('mongoose');

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_LOCAL_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((msg) => {
			console.log(
				`MongoDB Database connected with HOST: ${msg.connection.host}`
			);
		});
};

module.exports = connectDatabase;
