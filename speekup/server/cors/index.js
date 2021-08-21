const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);