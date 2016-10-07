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
    db.post_menu_item([req.body.name, req.body.cut_of_meat, req.body.description], function(err){
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
    db.delete_menu_item([req.body.id], function(err, menu){
      if (!err) {
        res.status(200).json(menu);
      } else {
        res.send(err);
      }
    });
  }




};
