// Modules
const express = require('express');
const cors = require('cors');
const ctrResources = require('./controllers/resources_controller');

// Config
const SRV_PORT = 3050;

// Server Setup
const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));
app.use(cors());

// Server Api Routes
app.get('/api/resources', ctrResources.read);
app.get('/api/resources/query', ctrResources.query);
app.post('/api/resources', ctrResources.create);
app.post('/api/resources/:id', ctrResources.update);
app.delete('/api/resources/:id', ctrResources.delete);

// start server
app.listen(SRV_PORT, () => {
  console.clear();
  console.log(`App started on port# ${SRV_PORT}`);
});
