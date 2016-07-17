var User = require('../models/userModel'),
	Perk = require('../models/perkModel'),
    Company = require('../models/companyModel'),
    Vendor = require('../models/vendorModel'),
    Redeem = require'../models/redeemedPerkModel');

module.exports = {

  createRedeem: function(req, res) {
    new Redeem(req.body).save(function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
      Perk.find({ _id: req.params.id })
      	.populate('vendor_id')
      	.populate('company_id')
      	.exec(function (err, result) {
        	if (err) {
          		res.status(500).send('failed to find');
        	} else {
          		res.json(result);
        	}
      	});
      }
    });
  },

  read: function (req, res) {
    Redeem
      .find(req.query)
      .exec(function (err, result) {
        if (err) {
          return res.status(500).send(err);
        }
        // console.log("back end working",result)
        res.send(result);
      });
  },

  update: function (req, res) {
    Redeem.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, result) {
      if (err) {
      	return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  delete: function (req, res) {
    Redeem.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  currentRedeem: function (req, res) {
    User
      .find({ _id: req.params.id })
      .populate('')
      .exec(function (err, result) {
        if (err) {
          res.status(500).send('failed to find');
        } else {
          res.json(result);
        }
      });
  },

};