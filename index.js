const express = require("express");
const api = require("./api");
const app = express();

app.get("/:short", function(req, res) {

    api.find(req.params.short, function(err, url) {

        if(err) {
            res.status(404).send("Not Found");
        } else {
            res.redirect(url);
        }

    });

});

app.get("/api/shorten", function(req, res) {

    api.shorten(req.query.url, function(err, short) {

        if(err) {
            res.json({
                error: true,
                message: err.message
            });
        } else {
            res.json({
                error: false,
                short: short
            });
        }

    });

});

app.listen(8080, function() {

    console.log("Serwer został uruchomiony pod adresem http://localhost:8080");

});