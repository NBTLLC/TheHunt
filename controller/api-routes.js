// =============================================================
var path = require("path");
// Requiring our models
var db = require("../models");

// Routes
// =============================================================

module.exports = function (app) {

    // html route loads view.html to display the entire webpage
    app.get("/", function (req, res) {
        db.Company.findAll({})
            .then(function (company_data) {
                var companyInfo = {
                    companies: company_data
                };
                return res.render('index', companyInfo)
            });
    });
    // html route loads about.html to display the entire webpage
    app.get("/about", function (req, res) {
                return res.render('about')
    });
    // GET route loads all companies from database
    app.get("/api/companies", function (req, res) {
        db.Company.findAll({})
            .then(function (the_hunt_db) {
                res.json(the_hunt_db);
            });
    });
    // POST route posts a new company to the database
    app.post("/api/companies", function (req, res) {
        db.Company.create(req.body).then(function (the_hunt_db) {
            res.json(the_hunt_db);
        });
    });
    // PUT route updates all of a company's information in the database from the update modal form
    app.put("/api/companies/:id", function (req, res) {
        db.Company.update(
            req.body,
            {
                where: {
                    id: req.params.id
                }
            })
            .then(function (the_hunt_db) {
                res.json(the_hunt_db);
            });
    });
    // PUT route updates a company's board position in the db
    app.put("/api/companies/:board/:id", function (req, res) {
        db.Company.update(
            {
                board_position: req.params.board
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(function (the_hunt_db) {
                res.json(the_hunt_db);
            });
    });
    // GET route for retrieving a single company's information
    app.get("/api/companies/:id", function (req, res) {
        db.Company.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (the_hunt_db) {
                res.json(the_hunt_db);
            });
    });
    // DELETE route for deleting a single company
    app.delete("/api/companies/:id", function (req, res) {
        db.Company.destroy(
            {
                where: {
                    id: req.params.id
                }
            })
        .then(function (the_hunt_db) {
            res.json(the_hunt_db);
        })
    });
};