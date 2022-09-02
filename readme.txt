3/9/2023

Started off with book record management API(Application interface)
This is purely a backend project.

Used for management of book record in college/ uni etc
Developed using MEN
M: MongoDB [DB]
E: Express
N: NodeJS


Store Book data
Register a user
Buy a subscription
Based on subscription he may take a book

Requirements: 
    Routes and endpoints:
        /users ->   
            Methods:
                POST : Create a new user
                GET : Get list of all the users

        /users/{id} ->
            This is a dynamic route.
            We can send a value to the {id} variable.
            id is a unqiue variable in the DB.

            Fetch data of a particular user, say users/1

            Methods: 
                GET: to get user details by id
                PUT: to update the details of a particular user by id
                DELETE: to delete info of a particular user by id (deletion should not be possible if he/she has an ongoing book subscription && see if all the dues are paid off.)
                Fine is: Rs.100


        /users/subscription-details/{id} ->
            Methods:
                GET: fetch user subscription details 
                    [
                        Date of subscription,
                        valid till,
                        Find if any fines, book to be returned etc,
                    ]

        Books routes:
        /books ->
            GET: Get list of all the books
            POST: Create/ add a new book

        /books/{id} ->
            GET: Get details of a particular book by id.
            PUT: Update a book by id
            DELETE: Delete a book [optional]
        
        /books/issued ->
            GET: fetch list of books that are issued.


        /books/issued/withFine ->
            GET: fetch only those books which have a fine associated with it.


        NOTE:
        Types of subscriptions:
            Basic [3months]
            Standard [6months]
            Premium [12months]

        If the subscription date is 03/8/2022
        and subscription type is Basic, the valid-till date will be
        03/11/2022.

        If he has an issued book, and the issued book has to be returned at 
        01/01/2023. And he missed the date, then he gets a fine of Rs. 100

        If he has an issued book and the issued book is to be returned at
        01/01/2023, but if he missed the date, and his subscription also
        expires then he will get a fine of Rs.200



Progress
    Setup the Application

        npm init

    install express
        
        npm install express

    install nodemon
        npm install nodemon --save-dev

    

