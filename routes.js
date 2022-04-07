const express = require("express");
const User = require("./models/userModel");
const router = express.Router();
const endpoints = require("./endpoints");
const jwt = require('jsonwebtoken');

router.post('/login',endpoints.addAuthToken);
router.get("/users/getUsers", endpoints.withAuth, endpoints.getUsers);
router.get("/users/getUserById/:id", endpoints.withAuth, endpoints.getUserById);
router.post("/users/addUser", endpoints.withAuth, endpoints.addUser);

module.exports = router;
