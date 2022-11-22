const User = require('../models/user')
const bcrypt = require('bcrypt')
const saltRounds = 10;

createUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a User',
        })
    }
    body['role']='member';
    
    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }
    user['password']=bcrypt.hashSync(body.password, bcrypt.genSaltSync(saltRounds));
    user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
            id: user._id,
            message: 'Account created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Account not created!',
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        if(body.email)
            user.email = body.email
        if(body.password)
            user.password = bcrypt.hashSync(body.passsword, bcrypt.genSaltSync(saltRounds));
        if(body.role)
            user.role = body.role
        if(body.favourites)
            user.favourites=body.favourites
        user.save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'Account details updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Account Details not updated!',
                })
            })
    })
}

deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, User) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!User) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: User })
    }).clone().catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, User) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!User) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: User })
    }).clone().catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, Users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: Users })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUserById,
}