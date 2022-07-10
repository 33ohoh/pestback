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
router.post("/report", async (req, res) => {
    const userInfo = {
      id: req.body.id,
      street_address: req.body.street_address,
      detailed_address: req.body.detailed_address,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      product_name: req.body.product_name,
      symptom: req.body.symptom,
      pest_name: req.body.pest_name,
      image_url: req.body.image_url,
      details: req.body.details,
    };
  
    models.Declaration.create(userInfo)
      .then((result) => {
        res.status(200).send({
            status: true,
            
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          result: false,
         
        });
      });
});
module.exports = router;