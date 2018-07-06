import { v4 } from 'uuid';
import { User } from '../model';

/**
 * Get all users
 * @param req
 * @param res
 * @returns void
 */
/* eslint-disable newline-per-chained-call */
const getUsers = async (req, res) => {
    try {
        res.status(200).json(await User.find().sort('-dateAdded').exec());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Save a user
 * @param req
 * @param res
 * @returns void
 */
const addUser = async (req, res) => {
    req.log.info(req.body.user);
    if (!req.body.user.firstName || !req.body.user.lastName || !req.body.user.emailid) {
        res.status(400).end();
    }
    const newUser = new User(req.body.user);
    newUser.cuid = v4();
    try {
        res.status(201).json(await newUser.save());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Gets a single user
 * @param req
 * @param res
 * @returns void
 */
const getUser = async (req, res) => {
    try {
        res.status(200).send(await User.findOne({ cuid: req.params.cuid }).exec());
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Gets a single user and updates
 * @param req
 * @param res
 * @returns void
 */
/* eslint-disable no-underscore-dangle */
const updateUser = async (req, res) => {
    try {
        const updateFields = req.body.user;
        const user = await User.findOneAndUpdate({ cuid: req.params.cuid }, updateFields).exec();
        const updatedUser = {
            ...user._doc,
            ...updateFields,
        };
        res.status(202).json(updatedUser);
    } catch (err) {
        res.status(500).send(err);
    }
};

/**
 * Gets a single user and removes
 * @param req
 * @param res
 * @returns void
 */
const removeUser = async (req, res) => {
    try {
        await User.findOneAndRemove({ cuid: req.params.cuid }).exec();
        res.status(204).end();
    } catch (err) {
        res.status(500).send(err);
    }
};

const UserController = {
    getUsers,
    addUser,
    getUser,
    updateUser,
    removeUser,
};

export default UserController;
