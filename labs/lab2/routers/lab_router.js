const express = require('express');
const router = express.Router();

//Default Route
router.get("/", (req, res) => {
    res.send("Welcome to the lab 2 router");
})

//Name Route
router.get("/name", (req, res) => {
    res.send(`Welcome ${"Russell Fenton"}`);
})


//Greeting Route
router.get("/greeting", (req, res) => {
    res.send(`Welcome ${"Russell, this is your Student Number:n01426507"}`);
})


//Addition Route
router.get("/add/:x/:y", (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    res.send(`The sum is ${x + y}`)
    
})



//Calculation Route
//Order value 1 value 2 operation
router.get("/calculate/:a/:b/:operation", (req, res) => {
    const a = parseFloat(req.params.a); 
    const b = parseFloat(req.params.b); 
    const operation = req.params.operation; 
    //Values must be numbers
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Both a and b must be valid numbers.");
    }
    let result;
    //Switch between selected operation of these 
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                return res.status(400).send("Division by zero is invalid");
            }
            result = a / b;
            
            break;
        case "%":
            result = a % b;
            break;
        default:
            return res.status(400).send("Invalid operation. Use +, -, *, /, or %.");
    }
    //Print results
    res.send(`The result of ${a} ${operation} ${b} is ${result}`);
});

module.exports = router; 