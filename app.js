const express = require("express")
const bodyparser = require("body-parser")
const app = express()

app.set('view engine', 'ejs')
let items = ["buy food", "cook food" , "eat"];
app.use(bodyparser.urlencoded({
  extended: true
}))
app.use(express.static("public"))
app.get("/", (req, res) => {
  const today = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const day = today.toLocaleDateString("en-US", options)

  res.render("list", {
    k: day , nli: items});
})
app.post("/", (req, res) => {
  let item = req.body.newitem;
  items.push(item)

  res.redirect("/")

})
app.post("/delete", (req, res) => {
  let item = req.body.deleteItem;
  items.pop(item)

  res.redirect("/")

})

app.listen(3000, () => console.log('server is re runnning on port 3000'))
