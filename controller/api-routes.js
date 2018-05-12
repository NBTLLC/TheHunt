// =============================================================
var path = require("path");
// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // html route loads view.html
    app.get("/", function (req, res) {
        // console.log(req);
        // console.log(res);
        //============================
        // res.sendFile(path.join(__dirname, "../public/add_company_form.html"));
        //============================
        db.Company.findAll({})
            .then(function (company_data) {
                console.log(company_data);
                var companyInfo = {
                    companies: company_data
                };
                return res.render('index', companyInfo)
            });
        //============================
        
    });
    // api route loads all companies from database
    app.get("/api/companies", function (req, res) {
        db.Company.findAll({})
            .then(function (the_hunt_db) {
                res.json(the_hunt_db);
            });
    });
    // api route posts a new company to the database
    app.post("/api/companies", function (req, res) {
        db.Company.create(req.body).then(function (the_hunt_db) {
            res.json(the_hunt_db);
        });
    });
    // api route updates a company in the database
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
    // api route for retrieving a single company's information
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

};