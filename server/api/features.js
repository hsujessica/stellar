const router = require('express').Router();
const {Feature} = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const features = await Feature.findAll();
    console.log(features)
    res.status(200).send(features);
  }
  catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const feature = await Feature.findById(req.params.id);
    res.status(200).send(feature);
  }
  catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newFeature = await Feature.create(req.body);
    console.log(newFeature)
    res.status(201).send(newFeature);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
