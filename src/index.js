const express = require('express');
const {PORT} = require('./config/serverConfig');
const app = express();

const prepareAndStartServer = () => {
    app.listen(PORT, () => {
        console.log(`Server started on Port: ${PORT}`);
    });
}

prepareAndStartServer();