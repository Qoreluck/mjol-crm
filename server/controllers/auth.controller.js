const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");

const keys = require("../keys");
const User = require("../models/user.model");

module.exports.login = async (req, res) => {
  const canditade = await User.findOne({ login: req.body.login });

  if (canditade) {
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      canditade.password
    );

    if (isValidPassword) {
      const token = jwt.sign(
        {
          login: canditade.login,
          userId: canditade._id
        },
        keys.JWT,
        { expiresIn: 60 * 60 }
      );
      res.json({ token });
    } else {
      res.status(401).json({ message: "Пароль неверен!" });
    }
  } else {
    res.status(404).json({ message: "Пользователь не найден" });
  }
};

module.exports.createUser = async (req, res) => {
  const canditade = await User.findOne({ login: req.body.login });

  if (canditade) {
    res.status(409).json({ message: "Такой login уже занят" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    let avatar
    if(req.file){
        avatar = `/${req.file.filename}`
    } else{
        avatar = '/avatar.jpg'
    }
    const user = new User({
      media: {
        avatarUrl: avatar,
        username: req.body.name
      },
      login: req.body.login,
      password: bcrypt.hashSync(req.body.password, salt)
    });

    try {
      await user.save();
      res.status(201).json({ user });
    } catch (e) {
      res.status(500).json(e);
    }
  }
};

