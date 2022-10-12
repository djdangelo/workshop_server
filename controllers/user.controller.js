const messageShared = require('../shared/messages.shared');
const db = require('../database/config');

const userController = { };

userController.createUser = async (req, res) => {
    try {
        const { name, email, description, phone_number } = req.body;
        const data = { name, email, description, phone_number };
        await db.query('INSERT INTO tbl_user SET ?', data);
        return messageShared.messageExit(res, 'Data insert successful.', []);
    } catch (e) {
        console.error(e);
        return messageShared.messageError(e, 'createUser', res);
    }
};
userController.listUser = async (req, res) => {
    try {
        const listData = await db.query('SELECT * FROM tbl_user');
        return messageShared.messageExit(res, 'List of users.', listData);
    } catch (e) {
        console.error(e);
        return messageShared.messageError(e, 'listUser', res);
    }
};
userController.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('UPDATE tbl_user SET ? WHERE id_user = ?', [ req.body, id ]);
        return messageShared.messageExit(res, 'The update is successful.', []);
    } catch (e) {
        console.error(e);
        return messageShared.messageError(e, 'updateUser', res);
    }
};
userController.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM tbl_user WHERE id_user = ?', id);
        return messageShared.messageExit(res, 'The delete is successful.', []);
    } catch (e) {
        console.error(e);
        return messageShared.messageError(e, 'deleteUser', res);
    }
};
userController.oneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const dataList = await db.query('SELECT * FROM tbl_user WHERE id_user = ?', id);
        return messageShared.messageExit(res, 'One user', dataList);
    } catch (e) {
        console.error(e);
        return messageShared.messageError(e, 'oneUser', res);
    }
};

module.exports = userController;