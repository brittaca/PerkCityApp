var Mongoose = require('mongoose'),

var companySchema = new Mongoose.Schema({

    companyName: { type: String/*, required: true*/ },
    approvedDomains: [{ type: String }],
    logo: { type: String }
});

module.exports = Mongoose.model('Company', companySchema);