var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var campgrounds = [
    {name:'test', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Camping_in_Nova_Scotia_%28Hine%29.png/1920px-Camping_in_Nova_Scotia_%28Hine%29.png"}
    ,{name:'test - 2', image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/00_0968_Sweden%2C_place_Fj%C3%A4lkinge_%28Camping%29.jpg/1280px-00_0968_Sweden%2C_place_Fj%C3%A4lkinge_%28Camping%29.jpg"}
    ,{name:'test - 3', image:"https://upload.wikimedia.org/wikipedia/commons/7/70/A_camping-place_in_the_wilderness_of_Sinai.jpg"}
];

port = 3000

app.use(bodyParser.urlencoded({extended: true}));
// set view engine to Embedded java script
app.set("view engine","ejs");

// Root Path
app.get('/', (req, res) => {
    res.render('landing.ejs')
  })

//
app.get('/campgrounds',(req,res)=>{
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post('/campgrounds', function (req, res) {
    //get data from form and add to campground array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image}
    campgrounds.push(newCampground);
    //redirect to campgrounds
    res.redirect('/campgrounds');
  });

app.get('/campgrounds/new', (req,res)=>{
    res.render('new.ejs');
});


//Initiate Listening on port
app.listen(port,()=>{
    console.log("example App");
})

