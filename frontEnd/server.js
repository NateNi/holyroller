var express = require("express")
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
//  sends to tables page 
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
// sends to reservation page 
app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays reservation, or returns false
app.get("/reservation/:reservation", function (req, res) {
    var reserve = req.params.reservation;

    console.log(reserve);
    for (var i = 0; i < reserve.length; i++) {
        if (reserve === reserve[i].routeName) {
            return res.json(reserve[i]);
        }
    }

    return res.json(false);
});

app.post("/api/tables", function(req, res) {

    var newreservation = req.body;

    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newreservation);
  
    characters.push(newresrvation);
  
    res.json(newreservation);
  });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});