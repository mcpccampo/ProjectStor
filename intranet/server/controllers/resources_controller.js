const e = require('express');
const data = require('../data/data.json');
let id = data.length + 1;

module.exports = {
  create: (req, res) => {
    console.log('~>Reached the Create EndPoint');

    let { img, title, group, url, post } = req.body;
    let record = { id, img, title, group, url, post };

    data.push(record);
    id++;

    console.log(` :: Added Record ${record}`);
    res.status(200).send(data);
  },
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
        e.title.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredData && filteredData.length) {
        return res.status(200).send(filteredData);
      } else {
        console.log(' :: Record Not Found');
        return res.sendStatus(404);
      }
    }
  },
  update: (req, res) => {
    console.log('~>Reached the Update EndPoint');

    const { id } = req.params;
    const { img, title, group, url, post } = req.body;

    // console.log(` :: Param Id: ${id}`);
    // console.log(` :: Body ${title},${group},${url}`);

    let index = data.findIndex((e) => e.id === parseInt(id));

    console.log(` :: Found Index: ${index}`);

    if (index >= 0) {
      let record = {
        id: data[index].id,
        img: img || data[index].img,
        title: title || data[index].title,
        group: group || data[index].group,
        url: url || data[index].url,
        post: post || data[index].post
      };
      data[index] = record;
      res.status(200).send(data);
    } else {
      res.sendStatus(404);
      console.log(' :: Could not update record');
    }
  },
  delete: (req, res) => {
    console.log('~>Reached the Delete EndPoint');

    const { id } = req.params;
    const index = data.findIndex((e) => e.id === parseInt(id));

    if (index >= 0) {
      data.splice(index, 1);
      res.status(200).send(data);
      console.log(' :: Deleted Record: ', index);
    } else {
      res.sendStatus(404);
      console.log(' :: Record Not Found');
    }
  },
};
