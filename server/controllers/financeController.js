var financeModel = require('../models/financeModel.js');

/**
 * financeController.js
 *
 * @description :: Server-side logic for managing finances.
 */
module.exports = {

    /**
     * financeController.list()
     */
    list: function (req, res) {
        financeModel.find(function (err, finances) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting finance.',
                    error: err
                });
            }
            return res.json(finances);
        });
    },

    /**
     * financeController.show()
     */
    year: function (req, res) {
        var year = req.params.year;
        financeModel.findOne({year: year}, function (err, finance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting finance.',
                    error: err
                });
            }
            if (!finance) {
                return res.status(404).json({
                    message: 'No such finance'
                });
            }
            return res.json(finance);
        });
    },

    /**
     * financeController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        financeModel.findOne({_id: id}, function (err, finance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting finance.',
                    error: err
                });
            }
            if (!finance) {
                return res.status(404).json({
                    message: 'No such finance'
                });
            }
            return res.json(finance);
        });
    },

    /**
     * financeController.create()
     */
    create: function (req, res) {
        var finance = new financeModel({
			year : req.body.year,
			montant : req.body.montant,
			recette_t_1 : req.body.recette_t_1,
			recette_t_2 : req.body.recette_t_2,
			recette_f : req.body.recette_f

        });

        finance.save(function (err, finance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating finance',
                    error: err
                });
            }
            return res.status(201).json(finance);
        });
    },

    /**
     * financeController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        financeModel.findOne({_id: id}, function (err, finance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting finance',
                    error: err
                });
            }
            if (!finance) {
                return res.status(404).json({
                    message: 'No such finance'
                });
            }

            finance.year = req.body.year ? req.body.year : finance.year;
			finance.montant = req.body.montant ? req.body.montant : finance.montant;
			finance.recette_t_1 = req.body.recette_t_1 ? req.body.recette_t_1 : finance.recette_t_1;
			finance.recette_t_2 = req.body.recette_t_2 ? req.body.recette_t_2 : finance.recette_t_2;
			finance.recette_f = req.body.recette_f ? req.body.recette_f : finance.recette_f;
			
            finance.save(function (err, finance) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating finance.',
                        error: err
                    });
                }

                return res.json(finance);
            });
        });
    },

    /**
     * financeController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        financeModel.findByIdAndRemove(id, function (err, finance) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the finance.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
