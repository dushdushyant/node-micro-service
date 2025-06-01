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
        try {
            const result = await pool.query('SELECT * FROM users');
            return result.rows;
        } catch (error) {
            console.error('Error fetching users from database:', error);
            throw error;
        }
    }
}

module.exports = Service;