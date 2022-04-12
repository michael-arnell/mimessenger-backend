const express = require("express");
const User = require("./models/userModel");
const router = express.Router();
const endpoints = require("./endpoints");
const jwt = require('jsonwebtoken');
// const cors = require('cors');
// ,cors({origin: "http://localhost:3000/login"})
router.post('/login', endpoints.addAuthToken);
router.get("/users/getUsers", endpoints.getUsers);
router.get("/users/getUserById/:id", endpoints.withAuth, endpoints.getUserById);
router.post("/users/addUser", endpoints.addUser);

module.exports = router;
