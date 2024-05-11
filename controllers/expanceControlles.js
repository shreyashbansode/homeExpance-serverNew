const { model } = require('mongoose');
const Model = require('../model/expanceModel');

exports.createExpance = async (req, res) => {
    try {
        const body = req.body;
        let expancePrice = Math.round(body.productPrice / 3);
        let newBody = {
            ...body,
            Shreyash: expancePrice,
            Prem: expancePrice,
            Hrishi: expancePrice
        }
        const saveData = await new Model(newBody).save();
        if (saveData) {
            res.send({
                success: true,
                message: 'Expance added successfully'
            })
        } else {
            res.send({
                success: false,
                message: 'Failed to add expance'
            })
        }
    } catch (err) {
        res.send({
            success: false,
            message: 'Failed to add expance'
        })
    }
}

exports.getAllExpance = async (req, res) => {
    try {
        const getData = await Model.find();
        if (getData) {
            res.send({
                success: true,
                message: 'Expance data successfully fetch',
                data: getData
            })
        } else {
            res.send({
                success: false,
                message: 'Failed to fetch data'
            })
        }
    } catch (err) {
        res.send({
            success: false,
            message: 'Failed to fetch data'
        })
    }
}

exports.updateExpense = async (req, res) => {
    try {
        const paramsID = req.params.ID;
        const payload = req.body;
        Model.findByIdAndUpdate(paramsID, payload, { new: true }).then(data => {
            if (!data) {
                res.status(404).send({
                    message: `failed to upadate expance`,
                    success: false
                });
            } else {
                res.send({
                    message: "Expance update successfully",
                    success: true
                })
            }
        })
    } catch (err) {
        res.status(500).json({
            message: 'failed to update',
            status: false
        });
    }
};




