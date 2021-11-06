# grab-driver-api-clone 

### [1] Introduction
This is a simple API built using Docker, MongoDB, Node.js and Express.js as part of interview process for my internship. Anyway, this is a mock API for Grab (a popular e-hailing company in Southeast Asia). When the server starts running, a seed script will populate mock data of about 30 drivers in a 20 x 20 imaginary grid. Then, a "customer" (client/frontend/API consumer) can send their location in a certain format in JSON and the API will return the nearest eligible driver. Not all drivers are always eligible for a customer. For instance, a particular driver's car might be able to fit in 2 customers only, so that driver will never be matched with customers who want to bring in their friends/family more than this capacity, say 5 or 6.

### [2] Technologies Used/Features Implemented
* Docker
* Node.js
* Express.js
* MongoDB
* Mongoose

### [3] How To Run The Project Locally
It's super easy to run this app, especially since it is Dockerized/containerized. There are very little prerequisites to run this app. All you need to do is have Docker installed on your machine. Also, make sure that docker-compose is installed too. To verify if docker-compose is installed, please run the following command in a terminal on your machine: `docker-compose --version`. You should see the version of your docker-compose. Now, just clone this GitHub repository. In the root of this repository, please execute the following command: `docker-compose up` (you don't even need to add a .env file or do anything extra as I've provided it). The API will be launched on your browser on port 5000 (or just manually type `localhost:5000` in the URL bar of your browser). 

The above steps will most probably work, but in case you encounter some issues (very highly unlikely), execute the following commands step-by-step to ensure you're building the Docker image the right way. First, `docker-compose down`, followed by `docker-compose build --pull`, and finally `docker-compose up`. This troubleshooting technique can be applied to other Dockerized applications too.

### [4] API Usage
It is recommended to use software to test APIs such as Postman or Insomnia. There are two routes, first is a bonus one I've created which is not part of the requirements (but is super helpful), and the second one which is the main route in this API (and is part of the requirement).

#### Route 1: Get All Drivers (Bonus Route, Not Part of Assessment)
    Access: public
    Description: get all drivers in the database
    Route: /api/search/drivers
    HTTP method: GET
    Full URL: http://localhost:5000/api/search/drivers
    Request body: none, just hit this API endpoint
    Output (like following image, but more data): 

![Mohmed Ishak](https://user-images.githubusercontent.com/52876913/139466697-56b0b674-26c3-43bc-8887-feb8d4cca839.PNG)

#### Route 2: Get Nearest Drivers
```bash
    Access: public
    Description: get nearest, eligible drivers
    Route: /api/search/drivers
    HTTP method: POST
    Full URL: http://localhost:5000/api/search/drivers
    Request body: yes (JSON)
    Request body template: please copy the code snippet below (copy manually or find the copy button on top
                           right of the snippet with light gray background)
```    
```bash
{
  "customerName": "Mohmed Ishak",
  "customerLocation": {
    "x": 8,
    "y": 4
  },
  "customerDestination": {
  "x": 4,
  "y": 5
  },
  "customerGuestCount": 2
}
```
```bash 
    Validations:
        - name is a string of 1 to 50 characters
        - customerLocation and customerDestination are x-axis and y-axis based coordinates where each x or y
          point must be a number from 0 to 20 (inclusive) because it is assumed that the imaginary map is a
          20 x 20 grid
        - customerGuestCount should be a number from 2 till 7.  This variable means the number of people who
          wants to get in the car (excluding driver). So, this includes you and your friends/family, not the
          driver. For this API, it is assumed that the biggest car can fit in 8 people at a time including the driver.
    Output (like following image but varies based on input): 
```
![Mohmed Ishak](https://user-images.githubusercontent.com/52876913/139468660-b8b36169-74b0-4bd0-95b1-17f526c3aeef.PNG)

### [5] Internal Implementation of the API (If You're Interested)
Here's how the API is implemented. First of all, the `req.body` property is checked whether the client sends the right data in right format or not, for instance `customerName` and `customerLocation`. If even a portion of data is not included or not within limit, appropriate error message will be returned. Next, the distance between customer location and destination is calculated. Why? Because each driver has a property called `willDriveDistance`, so if a customer wants to ride for say 10 units of distance, but the capacity of a driver is only 8, they wouldn't be matched. Next, out of all the drivers in the database, only the drivers who can drive more than the demand of the customer and at the same time whose car can fit in all the customers (because one person might not necessarily book one seat only, but two, or three, or even more) are stored in a temporary array. At the same time, these drivers' MongoDB documents from database are dynamically added a key-value pair, which is the distance betweeen them and the customer to help with the computation in the codebase. Finally, the driver who is nearest to customer is returned to consumer of this API in JSON format.
