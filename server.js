const express = require("express");
const app = express();

const db = require("./models");
const PORT = process.env.PORT || 3030;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const utentiRoutes = require("./routes/utenti");
app.use("/utenti",utentiRoutes)

const pagamentiRoutes = require("./routes/pagamenti");
app.use("/pagamenti",pagamentiRoutes)

db.sequelize.sync().then(()=>{
    app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
})