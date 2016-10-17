var app = require("../server");
var db = app.get("db");

module.exports = {

  getAllMenu: function(req, res) {
    db.get_all_menu(function(err,menu){
      if (err) {
        res.status(402).json(err);
      } else {
        res.status(200).json(menu);
      }
    });
  },

  createMenuItem: function(req, res) {
    db.post_menu_item([req.body.name, req.body.cut_of_meat, req.body.description], function(err, item){
      if (err) {
        res.status(402).json("something went wrong");
      } else {
        res.status(200).json("submitted");
      }
    });
  },

  updateMenuItem: function(req, res) {
    db.update_menu_item([req.body.name, req.body.cut_of_meat, req.body.description], function(err, menu){
      if (!err) {
        res.status(200).json(menu);
      } else {
        res.send(err);
      }
    });
  },

  deleteMenuItem: function(req, res) {
    db.delete_menu_item([req.params.id], function(err, success){
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  },
  getReservations: function(req,res){
    db.get_reservations(function(err, reservatins){
      if (err) {
        res.status(402).json(err);
      } else {
        res.status(200).json(menu);
      }
    });
  },
  createReservation: function(req, res){
    db.create_reservations([req.body.date, req.body.guests, req.body.comments], function(err, item){
      if (err) {
        res.status(402).json("something went wrong");
      } else {
        res.status(200).json("submitted");
      }
    });
  },
  deleteReservations: function(req, res) {
    db.delete_reservations([req.params.id], function(err, success){
      if (err){
        res.sendStatus(500);
      }else {
        res.sendStatus(200);
      }
    });
  }




};
