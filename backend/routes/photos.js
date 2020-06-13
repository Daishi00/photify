const router = require('express').Router();
let Photo = require('../models/photo.model');

router.route('/').get((req, res) => {
    Photo.find()
    .then(photos => res.json(photos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const image = req.body.image;
  const description = req.body.description;
  const tags = req.body.tags;

  const newPhoto = new User({
      image,
      description,
      tags
    });

  newPhoto.save()
    .then(() => res.json('Photo added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;