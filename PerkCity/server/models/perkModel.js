var Mongoose = require('mongoose'),

var perkSchema = new Mongoose.Schema({
	title: { type: String/*, required: true*/ },
    description: { type: String/*, required: true*/ },
    category: {
      type: String,
      enum: ['food', 'fun', 'healthFitness', 'professionalServices', 'online', 'more']
    },
    location: { type: String },
    image: { type: String/*, required: true*/ },
    discount: { type: Number },
    expiration: { type: Date },
    vendor_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Vendor' },
    company_id: { type: Mongoose.Schema.Types.ObjectId, ref: 'Company' }
})


module.exports = Mongoose.model('Perk', perkSchema);