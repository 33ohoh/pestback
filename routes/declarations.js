const express = require("express");
const router = express.Router();
const models = require("../models");


// 신고 정보 전부 리턴
router.get("/data", (req, res, next) => {
    models.Declaration.findAll()
      .then((data) => {
        return res.status(200).json({
            data,
            status: true,
          });
      })
      .catch((err) => {
        console.log(err);
        return res.status(200).json({
            status: false,
          });
      });
  });
module.exports = router;