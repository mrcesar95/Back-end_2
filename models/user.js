const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
	firstName: {type: String,require:true},
	lastName: {type: String,require:true},
	email: {type: String,require:true},
	password: {type: String,require:true},
})

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sing({_id:this._id}, process.env.JWTPRIVATEKEY, {expiresIn:"7d"})
	return token

};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().require().label("First Name"),
		lastName: Joi.string().require().label("Last Name"),
		email: Joi.string().email().require().label("Email"),
		password: passwordComplexity.require().label("Password")

	});
	return schema.validate(data)
};

module.exports = {User, validate};