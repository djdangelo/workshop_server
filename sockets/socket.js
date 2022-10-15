const { io } = require('../index');
const messageShared = require('../shared/messages.shared');

io.on('connection', client => {

    const  id  = client.handshake.headers['my-id'];
    if (id === undefined) { return client.disconnect(); }

    console.log('Client is connected.');

    client.join(id);

    client.on('notifications', (payload) => {
        io.emit('list-notifications', payload);
    });

    client.on('private-notifications', (payload) => {
       io.to(payload.id).emit('private-notifications', payload);
    });


    client.on('disconnect', () => {
        console.log('Client is disconnected.');
    });

});