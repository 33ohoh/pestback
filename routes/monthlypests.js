const express = require("express");
const router = express.Router();
const models = require("../models");


// 입력한 달에 해당되는 해충들 정보 리턴
router.post('/month', async(req,res,next)=>{
    models.MonthPest.findAll({

        where :{
            month: req.body.month
        },
    })
        .then((pests)=>{
            return res.status(200).json({
                pests,
                status: true,
              });
        })
        .catch((err)=>{
            console.log(err);
            res.status(200).send({
              message: "달마다의 해충 서버 오류",
              status: false,
              err
            });
        })
});
  




module.exports = router;