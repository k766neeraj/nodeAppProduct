# nodeAppProduct
This nodeApp is used to create, fetch, update, Delete the Product in the database using the API request.
Here to connect to the Database you should have mongoDB compass in your system or MongoDB Atlas.
To change the url you can go to the file:db.js
     In this you can change mongourl variable to your database URL.
----------------------------------------------------------------------------
To start the nodeAppProduct follow the instruction:-
     1.First install the required packages using "npm install"
     2.Then, to run Folder type "node index.js" then the server will run in "http://localhost:3000"
     3.Then in the Postman check the api by following apirequest:-
            1. Fetch request :-
                    In the Postman or any other Application Type:  
                        http://localhost:3000/api/product/fetchProduct and don't forget to set 'get' while sending.
            2. Add the product :-
                    Type:-
                        http://localhost:3000/api/product/addproduct and don't forget to set 'post' while sending.
            3. Updateing the product :-
                    Here you have to send id of the product to update the Product
                    For ex:- 6566daca6ab2979dffff4e4f
                    Type:-
                        http://localhost:3000/api/product/updateproduct/6566daca6ab2979dffff4e4f and don't forget to set 'put' while sending
            4. Delete the product :-
                    Here you have to send id of the product to update the Product
                    For ex:- 6566daca6ab2979dffff4e4f
                    Type:-
                        http://localhost:3000/api/product/deleteproduct/6566daca6ab2979dffff4e4f and don't forget to set 'delete' while sending
                    
                    
