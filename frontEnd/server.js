var express = require("express")
var path = require("path");
var tabledata = require(`./data.js`)

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
});
//  sends to tables page 
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/tables.html"));
});
// sends to reservation page 
app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/reservation.html"));
});
app.get("/api/tables", function(req,res){
    res.json(table)
})
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
let table = []
app.post("/api/tables", function(req, res) {

    var newreservation = req.body;

    newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newreservation);
  
    table.push(newreservation);
  
    res.json(newreservation);
  });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});