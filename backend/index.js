require('dotenv').config();

// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Intero:Kidbluegod456@cluster0.kolbh.mongodb.net/high-scoreDB', {
	dbName: 'high-scoreDB',
	useNewUrlParser: true,
	useUnifiedTopology: true
}, err => err ? console.log(err) :
	console.log('Connected to high-scoreDB database'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	score: {
		type: Number,
		required: true,
		unique: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});
app.listen(5000); 