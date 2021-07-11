var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendfile("dist/index.html");
});

router.get("/authorize", function (req, res, next) {
  console.log("hit");
});
module.exports = router;
