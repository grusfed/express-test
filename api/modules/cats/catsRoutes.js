const catsRouter = require('express').Router();
const _ = require('lodash');
let cats = require('../../data/cats.json');

const min = 100;
const max = 10000;
const imgUrl = "http://loremflickr.com/400/200/cat";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


catsRouter.param('id', (req, res, next, id) => {
  let cat = _.find(cats, {id: id});

  if (cat) {
    req.cat = cat;
    next();
  } else {
    res.send();
  }
});

catsRouter.route('/')
  .get((req, res) => {
    res.json(cats)
  })
  .post((req, res) => {
    if (!req.body.hasOwnProperty('name') ||
      !req.body.hasOwnProperty('age') ||
      !req.body.hasOwnProperty('owner')) {
      return res.status(400).send('Error 400: Post syntax incorrect')
    }

    let newCat = {
      id: getRandomInt(min, max),
      name: req.body.name,
      age: req.body.age,
      owner: req.body.owner,
      img: imgUrl
    }

    cats.push(newCat);
    res.status(201).json(newCat);
  });

catsRouter.route('/:id')
  .get((req, res) => {
    let cat = req.cat;
   // res.json(cat || {});
    if (cat) {
      res.json(cat);
    } else {
      res.status(404).send("Error 404: No cat found");
    }
  })
  .delete((req, res) => {
    console.log('api- deleted cat: ' + req.params.id);
    cats = cats.filter(c => c.id !== req.params.id);
    res.json(cats);
  })
  .put((req, res) => {
    let update = req.body;

    let cat = _.findIndex(cats, {id: req.params.id});
    if (!cats[cat]) {
      res.status(404).send("Error 404: No cat found");
    } else {
      let updatedCat = _.assign(cats[cat], update);
      res.json(updatedCat);
    }
  });

module.exports = catsRouter;
