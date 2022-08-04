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


// 로그인한 아이디의 신고내역
router.post('/report', async(req,res,next)=>{
    models.Declaration.findAll({

        where :{
            id: req.body.id
        },
    })
        .then((result)=>{
            return res.status(200).json({
                result,
                status: true,
              });
        })
        .catch((err)=>{
            console.log(err);
            res.status(200).send({
              message: "사용자의 신고내역 서버 오류",
              status: false,
              err
            });
        })
});

  
// 신고내용 서버에 전송
router.post("/report/add", async (req, res) => {
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
      date: req.body.date,
      title: req.body.title
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

//병해충 해결완료 표시(db에서 not null인 컬럼 값을 조건으로 받음)
router.put("/changewhethertosolve", (req, res, next) => {

  models.Declaration.update(
    {
      whether_to_solve: "1",
    },
    {
      where: { 
        id: req.body.id,
        product_name: req.body.product_name,
        title: req.body.title,
        details: req.body.details,
        date: req.body.date,
      },
    }
  )
    .then((result) => {
      res.status(200).send({
        message: "변경성공!",
        status: true,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "변경 api 오류",
        status: false

      });
    });
});

module.exports = router;