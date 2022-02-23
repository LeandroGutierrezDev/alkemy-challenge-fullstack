const path = require('path');
const moment = require('moment');
const db = require('../database/models');
const sequelize = db.sequelize;
const Operations = db.Operation;

const operationsController = {
    'home': (req, res) => {
        Operations.findAll(
            {
                include: ['users']
            }
        )
        .then(operations => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: operations.length,
                    url: 'api/operations'
                },
                data: operations
            }
                res.json(respuesta);
            })
        .catch(error => res.send(error))
    },
    create: (req, res) => {
        Operations.create()
    }
}

module.exports = operationsController;