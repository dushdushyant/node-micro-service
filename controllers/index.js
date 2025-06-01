const Service = require('../services');
const service = new Service();

class Controller {
    getData(req, res) {
        // Get data from the service and send as response
        const data = service.fetchData();
        res.send(data);
    }

    postData(req, res) {
        // Logic to handle POST request
        const data = req.body; // Get data from the request body
        service.saveData(data); // Pass data to the service
        res.send("Data posted successfully");
    }

    async getUsers(req, res) {
        try {
            const users = await service.getUsers();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    }
}

module.exports = Controller;