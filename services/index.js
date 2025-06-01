class Service {
    fetchData() {
        // Return a sample Hello World message
        return { message: "Hello, Worldee!" };
    }

    saveData(data) {
        // Logic to save data to a data source
        console.log('Data received:', data);
    }
}

module.exports = Service;