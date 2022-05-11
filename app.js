const express = require("express")
const bodyparser = require("body-parser")
const app = express()

app.set('view engine', 'ejs')
let items = ["buy food", "cook food" , "eat"];
app.use(bodyparser.urlencoded({
  extended: true
}))
app.use(express.static("public"))
app.get("/", function(req, res) {
  var today = new Date();
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  let day = today.toLocaleDateString("en-US", options)
  res.render("list", {
    k: day , nli: items});
})
app.post("/", function(req, res) {
  let item = req.body.newitem;
  items.push(item)

res.redirect("/")

})
app.listen(3000, function() {
  console.log('server is re runnning on port 3000');
})
