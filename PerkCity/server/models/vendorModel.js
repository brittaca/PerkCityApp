var Mongoose = require('mongoose'),

var vendorSchema = new Mongoose.Schema({
    vendorName: { type: String/*, required: true*/ },
    address: { type: String/*, required: true*/ },
    city: { type: String/*, required: true*/ },
    state: { type: String/*, required: true*/ },
    zipcode: { type: String },
    locationName: { type: String },
    vendorIcon: { type: String/*, required: true*/ },
    vendorWebsite: { type: String },
    vendorPhone: { type: String }

});

module.exports = Mongoose.model('Vendor', vendorSchema);