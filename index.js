const express = require('express');
const app = express() // To initialise 
const port = 8081; //Port number


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Server is up and running"
    })
})

app.get('*', (req, res) => {
    res.status(404).json({
        "message": "Webpage currently under construction"
    })
})

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})