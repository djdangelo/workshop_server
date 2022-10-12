const { io } = require('../index');
const messageShared = require('../shared/messages.shared');

io.on('connection', client => {

    const  id  = client.handshake.headers['x-token'];
    console.log('Client is connected.');
    if (id !== null) { return client.disconnect(); }
    client.join(id);

    client.on('disconnect', () => {
        console.log('Client is disconnected.');
    });

});