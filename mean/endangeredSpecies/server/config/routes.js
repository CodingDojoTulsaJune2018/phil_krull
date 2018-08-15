const animals = require("./../controllers/animals");
const path = require('path');

module.exports = (app)=>{
    app.get("/animals", animals.index),
    app.post("/animals", animals.create),
    app.get("/animals/:id", animals.show),
    app.delete("/animals/:id", animals.delete),
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}