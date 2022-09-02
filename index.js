const express = require('express');
const app = express() // To initialise 
const port = 8081; //Port number

//importing data files
const { users } = require('./data/users.json');


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "Server is up and running"
    });
});


// users routes

/** 
 * Route: /users
 * Methods: GET
 * Desc: get all users
 * Access: Public
 * Parameters: none
*/

app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    });
});

/** 
 * Route: /users/:id
 * Methods: GET
 * Desc: get details of user by id
 * Access: Public
 * Parameters: none
*/
app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const user = users.find((each) => each.id === id);
    if( !user ) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }
    else{
        return res.status(200).json({
            success: true,
            message: user
        })
    }
});

/** 
 * Route: /users
 * Methods: POST
 * Desc: Create new user
 * Access: Public
 * Parameters: none
*/

app.post('/users', (req, res) => {
    const {id, name, surname, email, subscriptionType, subscriptionDate} = req.body;

    const user = users.find((each) => each.id === id);

    if(user){
        return res.status(404).json({
            success: false,
            message: "User exists with this ID"
        });
    }

    users.push({
        id,
        name, 
        surname, 
        email, 
        subscriptionType, 
        subscriptionDate
    });

    return res.status(200).json({
        status: true,
        data: users
    });
});

/** 
 * Route: /users
 * Methods: PUT
 * Desc: Updating exisiting user
 * Access: Public
 * Parameters: none
*/
app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {data} = req.body;
    const user = users.find((each) => each.id === id);

    if(!user){
        return res.status(404).json({
            success: false,
            message: "User not found!"
        })
    }

    const updatedUser = users.map((each) => {
        if(each.id === id){
            return {
                ...each,
                ...data
            };
        }
        return each;
    });
    return res.status(200).json({
        success: true,
        data: updatedUser
    })
});



app.get('*', (req, res) => {
    res.status(404).json({
        "message": "Webpage currently under construction"
    });
});

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
})