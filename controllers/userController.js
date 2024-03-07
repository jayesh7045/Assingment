const userRegistration = require("../models/user.model.js");
const bcrypt = require("bcrypt");
//create user register user
exports.registerController = async (req, res) => {
  try {
    const { username, email, password, image} = req.body;
    //validation
    if (!username || !email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please Fill all fields",
      });
    }
    //exisiting user
    const exisitingUser = await userRegistration.findOne({ email });
    if (exisitingUser && exisitingUser.username === username) {
      return res.status(401).send({
        success: false,
        message: "user already exisits",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userRegistration({
      username,
      email,
      password: hashedPassword,
      image : image,
    });
    await user.save();
    console.log(user);
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    console.log("Hello Ji");
    console.log(error);
    return res.status(500).send({
      message: "Error In Register callback",
      success: false,
      error,
    });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userRegistration.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Users",
      error,
    });
  }
};
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    //validation
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide email or password",
      });
    }
    const user = await userRegistration.findOne({ email });
    
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send({
          success: false,
          message: "Invalid username or password",
        });
      }
      return res.status(200).send({
        success: true,
        message: "login successfully",
        user,
      });
    } else {
      return res.status(401).send({
        success: false,
        message: "Email is not registerd",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Login Callcback",
      error,
    });
  }
};
