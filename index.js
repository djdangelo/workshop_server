require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const messagesShared = require('./shared/messages.shared');
const db = require('./database/config');

const cors = require('cors');

const app = express();

app.set('port', process.env.PORT);
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const server = require('http').createServer(app);

app.use(`${ process.env.GLOBAL_ROUTE }users`, require('./routes/user.route'));
app.use('/*', async (req, res) => {
    return messagesShared.messageNotAuthUser(res, 'You are not allowed this action.', []);
});

server.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
});