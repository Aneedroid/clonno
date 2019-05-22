'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clonnoService = require('../service/clonno-service');

const router = express.Router();

// const dbUrl = 'mongodb://localhost:27017/clonno?authSource=clonno';
const dbUrl = 'mongodb+srv://Anee:amazingpassword@clonno01-ef7yp.mongodb.net/clonno?retryWrites=true';

router.use(bodyParser.json());

mongoose.connect(dbUrl).then(() => {
  // eslint-disable-next-line no-console
  console.log('Successfully connected to the database');    
}).catch(err => {
  // eslint-disable-next-line no-console
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

router.post('/boards', async (req, res, next) => {
  try {
    return clonnoService.create(req, res);
  } catch (err) {
    next(err);
  }
});

router.get('/boards', async (req, res, next) => {
  try {
    return clonnoService.findAll(req, res);
  } catch (err) {
    next(err);
  }
});

router.put('/boards/:boardId', async (req, res, next) => {
  try {
    return clonnoService.update(req, res);
  } catch (err) {
    next(err);
  }
});

router.delete('/boards/:boardId', async (req, res, next) => {
  try {
    return clonnoService.delete(req, res);
  } catch (err) {
    next(err);
  }
});

module.exports = router;