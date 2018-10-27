

let table = []
let wait = []
$("#add-btn").on("click", function (event) {
    var reservation = {
        name: `${name}`,
        phone: `${phone}`,
        email: `${email}`,
        id: `${id}`
    }
    if(table.length >=5){
        wait.push(reservation)
    }
    else{table.push(reservation)}
    
})

$("#clear").on("click", function(event){
    table = []
    wait = []
})

var reservation = {
    name: "Nathan",
    phone: "512-287-6846",
    email: "nathan@aol.com",
    id: "3"
}
$.post("/api/tables", reservation)
    .then(function (data) {
        console.log("home.html", data);
        alert("Adding character...");
    });
table.push(reservation)