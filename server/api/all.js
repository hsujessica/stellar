const router = require('express').Router();
const {Feature} = require('../db');

router.get('/', (req, res, next) => {
  Feature.findAll()
    .then(features => res.json(features))
    .catch(next)
});

module.exports = router;
