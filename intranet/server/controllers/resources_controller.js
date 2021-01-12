const e = require('express');
const data = require('../data/data.json');
const id = data.length + 1;

module.exports = {
  create: (req, res) => {},
  read: (req, res) => {
    console.log('~>Reached the Read EndPoint');
    res.status(200).send(data);
  },
  query: (req, res) => {
    console.log('~>Reached the Query EndPoint');

    const { query } = req.query;
    const resourceData = [...data];

    if (query) {
      const filteredData = resourceData.filter((e) =>
        e.name.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredData && filteredData.length) {
        return res.status(200).send(filteredData);
      } else {
        console.log(' :: Record Not Found');
        return res.sendStatus(404);
      }
    }
  },
  update: (req, res) => {},
  delete: (req, res) => {},
};
