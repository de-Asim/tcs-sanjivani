const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

// all paths
const staticPath= path.join(__dirname,'../Public');
const partials_path = path.join(__dirname,'../templates/partials');
const views_path = path.join(__dirname,'../templates/views');
// 

app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',views_path);
hbs.registerPartials(partials_path);

app.get('',(req,res)=>{
    res.render("home");
})
app.get('/assign',(req,res)=>{
    res.render("assign");
})
app.post('/submit',(req,res)=>{
    res.render("submit");
})
app.post('/success',(req,res)=>{
    res.render("success");
})

app.listen(PORT,()=>{
    console.log("listening at port"+ PORT);
})

