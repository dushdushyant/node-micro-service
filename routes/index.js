const express = require('express');
const Controller = require('../controllers/index');

const setRoutes = (app) => {
    const router = express.Router();
    const controller = new Controller();

    router.get('/data', controller.getData.bind(controller));
    router.post('/data', controller.postData.bind(controller));
    router.get('/getusers', controller.getUsers.bind(controller));

    app.use('/api', router);
};

module.exports = setRoutes;