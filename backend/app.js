const express = require('express');
const cors = require('cors')
const app = express();
const handleErrors = require('./middlewares/handleErrors')

app.use(cors());

app.use(express.json());

//Import all the routes
const data = require('./routes/data');

app.use('/api/dashboard', data)

if (process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}


// Middleware to handle errors
app.use(handleErrors);

module.exports = app