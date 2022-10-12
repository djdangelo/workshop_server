const messagesShared = { };

messagesShared.messageError = (error, endPointName, res) => {
    return res.status(500).json({
        'data': error,
        'message': `Ocurrio un error interno, comunicate con el administrador. [${endPointName}]`,
        'error': true
    });
};

messagesShared.messageExit = (res, message, data) => {
    return res.status(200).json({
        data,
        message,
        'error': false
    });
};

messagesShared.messageBadRequest = (res, message, data) => {
    return res.status(400).json({
        data,
        message,
        'error': true
    });
};

messagesShared.messageErrorSockets = (e, data) => {
    return {
        'data': e,
        'message': `Ocurrio un error interno, comunicate con el administrador. [${data}]`,
        'error': true
    };
};

messagesShared.messageExitSockets = (message, data) => {
    return {
        data,
        message,
        'error': false
    };
};

module.exports = messagesShared;