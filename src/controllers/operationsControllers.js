const path = require('path');
const moment = require('moment');
const db = require('../database/models');
const sequelize = db.sequelize;
const Operations = db.Operation;

const operationsController = {
    'home': (req, res) => {
        Operations.findAll(
            // {
            //     include: ['users']
            // }
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
        // let operation = {
        //     type: req.body.type,
        //     concept: req.body.concept,
        //     amount: req.body.amount,
        //     date: req.body.date
        // }
        Operations.create(req.body)
        .then(operation => {
            let respuesta = {
                meta: {
                    status : 200,
                   },
                data: operation
            }
                res.json(respuesta);
            })
        .catch(error => res.send(error));
    },
    operation: (req, res) => {
        Operations.findByPk(req.params.id)
        .then(operation => {
            let respuesta = {
                meta: {
                    status : 200,
                   },
                data: operation
            }
                res.json(respuesta);
            })
        .catch(error => res.send(error));
    },
    edit: (req, res) =>{
        Operations.update({...req.body},{
            where: {id: req.params.id}
        })
        .then(operation =>{
            let respuesta = {
                meta: {
                    status : 200,
                   },
                data: operation
            }
                res.json(respuesta);            
        })
        .catch(error => res.send(error));


    },
    delete: (req, res) =>(
      Operations.destroy({
        where: { id: req.params.id }
    })
      .then(operation => {
        let respuesta = {
            meta: {
                status : 200,
               },
            data: operation
        }
            res.json(respuesta);
        })
    .catch(error => res.send(error))
    )}

module.exports = operationsController;