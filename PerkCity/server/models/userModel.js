var Mongoose = require('mongoose'),
    bcrypt = require('bcryptjs');

var UserSchema = new Mongoose.Schema({

    email: { type: String/*, required: true*/, unique: true },
    password: { type: String/*, required: true*/ },
    zipcode: { type: String },
    gender: { type: String }, //maybe do boolean??
    company_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Company' },
    role: {
      type: String,
      enum: ['user', 'companyAdmin', 'vendorAdmin', 'superAdmin'],
      default: 'user'
    }

});

UserSchema.set('toObject', {
  transform: function(doc, ret, options) {
    delete ret.__v;
    delete ret.password;
  }
});

UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = Mongoose.model('User', UserSchema);