Shopping List API
Project Overview

This is a RESTful Shopping List API built with Node.js and TypeScript.

It allows users to manage shopping items — add, view, update, and delete items from a shopping list.

Use-case scenario:

Create a shopping list for groceries.

Track items as purchased.

Update quantities.

Remove unnecessary items.

Base URL
http://localhost:3000

Endpoints
1. Get All Items

Method: GET

URL: /items

Response Example:

{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Milk",
      "quantity": "2L",
      "purchased": false
    }
  ]
}

2. Get Item by ID

Method: GET

URL: /items/:id

Success Response Example:

{
  "status": "success",
  "data": {
    "id": 1,
    "name": "Milk",
    "quantity": "2L",
    "purchased": false
  }
}


Error Response Example (Item Not Found):

{
  "status": "error",
  "message": "Item not found"
}

3. Add New Item

Method: POST

URL: /items

Headers:

Content-Type: application/json


Body Example:

{
  "name": "Eggs",
  "quantity": "12 pieces"
}


Success Response:

{
  "status": "success",
  "data": {
    "id": 2,
    "name": "Eggs",
    "quantity": "12 pieces",
    "purchased": false
  }
}


Error Response (Missing Fields):

{
  "status": "error",
  "message": "Name and quantity are required"
}

4. Update Item

Method: PUT

URL: /items/:id

Headers:

Content-Type: application/json


Body Example:

{
  "quantity": "24 pieces",
  "purchased": true
}


Success Response:

{
  "status": "success",
  "data": {
    "id": 2,
    "name": "Eggs",
    "quantity": "24 pieces",
    "purchased": true
  }
}


Error Response (Item Not Found):

{
  "status": "error",
  "message": "Item not found"
}

5. Delete Item

Method: DELETE

URL: /items/:id

Success Response:

Status: 204 No Content

No body returned.

Error Response (Item Not Found):

{
  "status": "error",
  "message": "Item not found"
}

HTTP Status Codes Summary
Action	Status Code
GET success	200 OK
GET not found	404
POST success	201 Created
POST validation error	400
PUT success	200 OK
PUT not found	404
DELETE success	204 No Content
DELETE not found	404
Workflow Diagram
         +--------------------+
         |   GET /items       |
         |   List all items   |
         +--------------------+
                   |
                   v
         +--------------------+
         |   POST /items      |
         |   Add new item     |
         +--------------------+
                   |
                   v
         +--------------------+
         |   GET /items/:id   |
         |   Retrieve item    |
         +--------------------+
                   |
                   v
         +--------------------+
         |   PUT /items/:id   |
         |   Update item      |
         +--------------------+
                   |
                   v
         +--------------------+
         |   DELETE /items/:id|
         |   Remove item      |
         +--------------------+

Testing in Postman

Start the server:

npm run dev


Use Postman to test all endpoints:

GET /items → view all items

POST /items → add new items

GET /items/:id → retrieve a specific item

PUT /items/:id → update an item

DELETE /items/:id → delete an item

Optional: Import the provided Postman collection to test all endpoints instantly.

Running the Project

Install dependencies:

npm install


Start the server:

npm run dev


Open Postman and test the endpoints at:

http://localhost:3000

Technologies Used

Node.js

TypeScript

Express.js

In-memory data storage

Postman for API testing

Notes

Data is stored in memory, so it resets on server restart.

All responses follow a consistent structure:

{ "status": "success|error", "data|message": ... }


Proper HTTP status codes are used for all operations.