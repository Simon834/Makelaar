const { User } = require('../models/user')


async function getUserById(req, res, next) {
    const userId = req.params.id

    try {
        const user = await User.findByPk(userId)
        if (user) {
            res.json(user)
        } else {
            res.status(204).json({ msg: "Id de usuario inexistente" })
        }
    } catch (err) {
        console.log(err)
        return next(err);
    }
}


module.exports = {
    getUserById
}