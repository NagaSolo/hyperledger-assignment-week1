# Project Title

Simple Server App

# Project Description

This is a MEN (Mongo, Express, Node) application purposelly build for the Fabric Developer application


## Simple_Server API

This simple server express-based projects were created using the simple_server image.

- Express
- Mongoose
- Dotenv
- Nodemon


## setup

Please note: this project use the npm package manager to install all our dependencies. 

1. Click on the link to open the github repository
2. On the far top right hand side of the screen: you'll see a green button labelled CODE, click on it once
3. A small modal window will open, by default HTTPS will be selected, if not select HTTPS
4. Copy the URL to clone it in your computer
5. After succefully cloning it, wait for further instructions 

## checkout "dev/compose" branch

- $`git checkout -b dev/compose`
- $`git pull origin dev/compose`


### Assessment Exercise

We are going to apply the knowledge we have gained from Week 1 modules to write a docker-compose yaml file to spin up all these applications services and boot them. 


## Part 1: Build Custom Image
- Checkout another git branch and name it “exercise”
- First step is to kill all running instances that 
- Verify that the image and container is removed “docker ps”
- Rename the image to “simple-exercise”
- Expose the public port to a new port “9393”
-Build the new image & Verify that the image is created
- Curl “http://0.0.0.0:9393”, alternatively you can copy and paste the url in your browser


## Part 2: Networking
- Stop the running processes: create a new custom bridge network called “fabricnet”, & inspect the list of networks to verify that it’s created successfully
- Start 2 containers with the “fabricnet” network and name them c1 & c2
- Open the terminal or command prompt and sh into both containers and run “ping c1” from c2 container
- Run a “nslookup c1” form c2 container and explore the results.


## Part 3: Mount Volumes
- Stop the running processes
- Using the same image, create a new container and define and mount the volume name “fabric-data” 
- List the existing volumes to verify that its successfully created

## Part 4: Services with docker-compose: Create a docker-compose.yml file

 - Checkout another git branch and name it “compose”
 - First step is to stop all running instances and remove the containers we just created
 - Verify that the image and container is removed “docker ps”
 - Write detailed development enviroment docker-compose commands following the specifications of docker compose version "3.8" 
  -- Run `docker-compose build` then 'docker-compose up` to test and run a multi-container services 
  -- The docker-compose.yml file should encapsulate version (3.8), services, volume  & network 
 - Rename the simple_server container-name to “simple-exercise-app”
 - Expose the public port to a new port “9944”
 - Rename the image name to “simple-ex”
 - Change the network tier to “simple-exe-tier”
 - Change the storage volume to “simple-exe-data”
 - Run the compose file to create new images and containers
 - Verify that the container is created
 - Curl “http://0.0.0.0:9944”, alternatively you can copy and paste the url in your browser
 - Verify that you are getting the same custom response message

 - Well done. You have successfully completed the	exercise


## Part 5: Submit

Submit Exercise: You need to have a free Docker Hub account to submit this exercise.

docker build -t username/repository_name .

We have build our images purposefully using our Dockerhub username/repository_name tag. 
In Your terminal or VSCode editor run the following docker command: docker login and login using the same credentials for your DockerHub. 
Run docker images to verify that the simple image we created has been tagged using your username
In the case you have not tagged the image: docker tag simple_server <yourUsername>/simple_server
Push the image to your Dockerhub account: docker push <username>/<image_name>
Navigate to the Dockerhub to verify that the image is there in your public repository. 
Change your repository policy to public if its currently set to private for this image
Assignment is complete. You will be asked to share the image link during the next class
