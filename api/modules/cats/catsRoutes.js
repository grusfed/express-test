const catsRouter = require('express').Router();
const _ = require('lodash');
let cats = require('../../data/cats.json');

catsRouter.param('id', (req, res, next, id) => {
  var cat = _.find(cats, {id: id});

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
    var cat = req.cat;
    cats.push(cat);
    res.json(cat);
  });

catsRouter.route('/:id')
  .get((req, res) => {
    var cat = req.cat;
    res.json(cat || {});
  })
  .delete((req, res) => {
    var cat = _.findIndex(cats, {id: req.params.id});
    cats.splice(cat, 1);

    res.json(req.cat);
  })
  .put((req, res) => {
    var update = req.body;

    var cat = _.findIndex(cats, {id: req.params.id});
    if (!cats[cat]) {
      res.send();
    } else {
      var updatedCat = _.assign(cats[cat], update);
      res.json(updatedCat);
    }
  });

module.exports = catsRouter;
