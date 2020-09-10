var express = require('express');
var app = express();

port = 3000

// set view engine to Embedded java script
app.set("view engine","ejs");

// Root Path
app.get('/', (req, res) => {
    res.render('landing.')
  })

//
app.get('/campgrounds',(req,res)=>{
    var campgrounds = [
        {name:'test', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Camping_in_Nova_Scotia_%28Hine%29.png/1920px-Camping_in_Nova_Scotia_%28Hine%29.png"}
        ,{name:'test - 2', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/00_0968_Sweden%2C_place_Fj%C3%A4lkinge_%28Camping%29.jpg/1280px-00_0968_Sweden%2C_place_Fj%C3%A4lkinge_%28Camping%29.jpg"}
        ,{name:'test - 3', image:"https://upload.wikimedia.org/wikipedia/commons/7/70/A_camping-place_in_the_wilderness_of_Sinai.jpg"}
    ]

    res.render("campgrounds",{campgrounds:campgrounds});
});


//Initiate Listening on port
app.listen(port,()=>{
    console.log("example App");
})

