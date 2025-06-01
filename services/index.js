const pool = require('../utils/pgClient');

class Service {
    fetchData() {
        // Return a sample Hello World message
        return { message: "Hello, Worldee!" };
    }

    saveData(data) {
        // Logic to save data to a data source
        console.log('Data received:', data);
    }

    async getUsers() {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }
}

module.exports = Service;