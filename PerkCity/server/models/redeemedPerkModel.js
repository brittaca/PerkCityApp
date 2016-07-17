var Mongoose = require('mongoose'),

var redeemedPerkSchema = new Mongoose.Schema({

	user_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'User'},
	perk_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Perk'},
	totalBeforeDiscount: { type: Number },
	date: { type: Date }

});

module.exports = Mongoose.model('RedeemedPerk', redeemedPerkSchema);