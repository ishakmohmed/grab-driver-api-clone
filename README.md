# grab-driver-api-clone 

### [1] Introduction
This is a simple API built using Docker, MongoDB, Node.js and Express.js as part of interview process for my internship. Anyway, this is a mock API for Grab (a popular e-hailing company in Southeast Asia). When the server starts running, a seed script will populate mock data of about 30 drivers in a 20 x 20 imaginary grid. Then, a "customer" (client/frontend/API consumer) can send their location in a certain format in JSON and the API will return the nearest eligible driver. Not all drivers are always eligible for a customer. For instance, a particular driver's car might be able to fit in 2 customers only, so that driver will never be matched with customers who want to bring in their friends/family more than this capacity, say 5 or 6.

### [2] Technologies Used/Features Implemented
* Docker
* Node.js
* Express.js
* MongoDB
* Mongoose

### API Usage

### [6] How To Run The Project Locally
It's super easy to run this app, especially since it is Dockerized/containerized. There are very little prerequisites to run this app. All you need to do is have Docker installed on your machine. Also, make sure that docker-compose is installed to. To verify if docker-compose is installed, please run the following command in a terminal on your machine: `docker-compose --version`. You should see the version of your docker-compose. Now, just clone this repository. In the root of this repository, please execute the foollowing command: `docker-compose up` (you don't even need to add a .env file or do anything extra). The API will be launched on your browser on port 5000 (or just manually type `localhost:5000` in the URL bar of your browser). 

The above steps will most probably work, but in case you encounter some issues (very highly unlikely), execute the following commands step-by-step so that you are building the Docker image the right way. First, `docker-compose down`, followed by `docker-compose build --pull`, and finally `docker-compose up`.
