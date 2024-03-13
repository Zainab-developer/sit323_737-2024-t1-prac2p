const express= require("express");
    const res = require("express/lib/response");
    const app= express();

    // Function to add two numbers
    const addTwoNumber= (n1,n2) => {
        return n1+n2;
    }

    // Endpoint to add two numbers
    app.get("/addTwoNumber", (req,res)=>{
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        const result = addTwoNumber(n1,n2);
        res.json({statuscocde:200, data: result }); 
    });

    // Console logging the result of addTwoNumber function with inputs 19 and 12
    console.log (addTwoNumber(19,12));

    // Starting the server and listening on port 3040
    const port=3040;
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port);
    })