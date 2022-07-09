const express = require("express");
const router = express.Router();
const models = require("../models");

// 회원가입
router.post("/register", async (req, res) => {
  const userInfo = {
    id: req.body.id,
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone
  };

  models.User.create(userInfo)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        result: false,
        message: "회원가입하는데 오류가 발생하였습니다.",
      });
    });
});

// 로그인
router.post("/login", async (req, res, next) => {
  var inputId = req.body.id;
  var inputPassword = req.body.password;

  models.User.findOne({
    where: { id: inputId },
  })
    .then((data) => {
      if (data) {
        let dbPassword = data.get("password");

        if (inputPassword == dbPassword) {
          return res.status(200).json({
            message: "로그인 성공",
            id: inputId,
            status: true,
          });
        } else {
          return res.status(200).json({
            message: "비밀번호가 틀립니다",
            status: false,
          });
        }
      } else {
        return res.status(200).json({
          message: "존재하지 않은 회원입니다",
          status: false,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "로그인 서버 오류",
        status: false,
      });
    });
});


// 아이디 중복
router.post("/exist", (req, res, next) => {
  models.User.findOne({
    where: { id: req.body.id },
  })
    .then((users) => {

      if(users){
        res.status(200).send({
          message: "이미 존재하는 id입니다",
          exist: false
        });
      }
      else {
        res.status(200).send({
          message: "사용가능한 id입니다",
          exist: true
        });
      }
      
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: "id확인 api 오류"

      });
    });
});

// 아이디 찾기
router.post("/findid", (req, res, next) => {
  models.User.findOne({
    attributes: ['id'],
    where: { name: req.body.name , phone : req.body.phone },
  })
    .then((users) => {

      if(users){
        res.status(200).send({
          message: "존재합니다!",
          exist: true,
          id:users.id
        });
      }
      else {
        res.status(200).send({
          message: "존재하지 않는 회원입니다.",
          exist: false
        });
      }
      
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: "id확인 api 오류"

      });
    });
});

// 비밀번호 찾기
router.post("/findpw", (req, res, next) => {
  models.User.findOne({
    attributes: ['password'],
    where: { id: req.body.id , phone : req.body.phone },
  })
    .then((users) => {

      if(users){
        res.status(200).send({
          message: "존재합니다!",
          exist: true,
          password:users.password
        });
      }
      else {
        res.status(200).send({
          message: "존재하지 않는 회원입니다.",
          exist: false
        });
      }
      
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({
        message: "Password확인 api 오류"

      });
    });
});


// 비밀번호 변경
router.put("/changepw", (req, res, next) => {

  models.User.update(
    {
      password: req.body.password,
    },
    {
      where: { id: req.body.id },
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

//회원 삭제
router.destroy("/delete", (req, res, next) => {
  models.User.destroy({
    where: { id: req.body.id },
  })
    .then((result) => {
      res.status(200).send({
        message: "삭제성공!",
        status: true,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "삭제 api 오류",
        status: false

      });
    });
});


module.exports = router;