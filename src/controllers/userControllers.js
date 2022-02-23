const path = require("path");
const db = require("../database/models");

const bcrypt = require('bcrypt');

const Operation = db.Operation;
const User = db.User;

const userControllers = {
    register: (req, res) => {
        let password = bcrypt.hashSync(req.body.password, 10);
        User.create({
            full_name: req.body.full_name,
            email: req.body.email,
            password: password
        })
            .then((user) => {
                let respuesta = {
                    meta: {
                        status: 200,
                    },
                    data: user,
                };
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },
    users: (req, res) => {
        User.findAll()
        .then((users) => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users,
            };
            res.json(respuesta);
        })
        .catch((error) => res.send(error));

    },
    user: (req, res) => {
        User.findByPk(req.params.id)
        .then((user) => {
            let respuesta = {
                meta: {
                    status: 200,
                },
                data: user,
            };
            res.json(respuesta);
        })
        .catch((error) => res.send(error));
    },
    edit: (req, res) => {
        User.update({...req.body},{
            where: {id: req.params.id}
        })
        .then((user) => {
            let respuesta = {
                meta: {
                    status: 200,
                },
                data: user,
            };
            res.json(respuesta);
        })
        .catch((error) => res.send(error));
    },
    delete: (req, res) =>{
        User.destroy({
            where: { id: req.params.id }
        })
        .then((user) => {
            let respuesta = {
                meta: {
                    status: 200,
                },
                data: user,
            };
            res.json(respuesta);
        })
        .catch((error) => res.send(error));
    }
};
module.exports = userControllers;
