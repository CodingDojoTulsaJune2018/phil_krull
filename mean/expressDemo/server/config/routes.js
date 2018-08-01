module.exports = app =>{
    console.log("this line 2", this);
    app.get("/", (req, res)=> {
        console.log("this line 4", this);
        res.render("index", {name: "Phil"});
    })

    app.get("/test", (req, res)=>{
        res.send("another response form teh server");
    })

}

param => param * 2;
() => {

}
(param1, param2) => { param1 * param2 }

