var User = require('../models/userModel'),
    Company = require('../models/companyModel'),
    Vendor = require('../models/vendorModel');

module.exports = {

  createUser: function(req, res) {
    new User(req.body).save(function(err, result) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.send(result);
      }
    });
  },

  login: function (req, res) {
    User.findOne({ email: req.body.email }, function (err, user) {
      if (user) {
        if (!user.validPassword(req.body.password))
          res.status(401).send('Wrong password. Try again');
        else {
          var payload = user.toObject();
          var token = jwt.sign(payload, config.secretKey, { expiresIn: 3600 });
          res.status(200).json({
            token: token
          });
        }
      }
      else res.status(401).send('User not found');
    });
  },

  read: function (req, res) {
    User
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
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  delete: function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, result) {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(result);
    });
  },

  currentUser: function (req, res) {
    User
      .find({ _id: req.params.id })
      .populate('inWaitList')
      .exec(function (err, result) {
        if (err) {
          res.status(500).send('failed to find');
        } else {
          res.json(result);
        }
      });
  },

};