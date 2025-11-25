# Containerizing-postgres-database
A fully containerized full-stack infrastructure project deploying a Node.js API and a custom PostgreSQL database to the cloud using AWS Elastic Container Service (ECS) and Fargate.

🚀 Project Overview

This project demonstrates Infrastructure-as-Code and Container Orchestration principles. Instead of using a managed database service (like RDS), this project containerizes a custom PostgreSQL instance with pre-seeded data and runs it alongside the backend application in the same ECS Task, communicating via localhost.

Key Features:

Backend: Node.js & Express REST API.

Database: Custom PostgreSQL image with automated data seeding (50+ dummy users).

Containerization: Multi-container setup using Docker.

Orchestration: Deployed on AWS ECS Fargate (Serverless Compute).

Networking: Internal communication between containers in a single Task Definition.

🛠️ Tech Stack

Cloud: AWS (ECS, Fargate, ECR)

Containerization: Docker, Docker Compose

Backend: Node.js, Express.js

Database: PostgreSQL (Custom Image)

Language: JavaScript, SQL

💻 Local Setup (How to run)

You can run this entire infrastructure locally using Docker Compose.

Clone the repository:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/Bilalshah1/Contanerizing-postgres-database.git)
cd Contanerizing-postgres-database


Run with Docker Compose:

docker-compose up --build


Access the App:
Open your browser to: http://3.26.214.70:3000/users

☁️ Deployment Architecture (AWS)

The project is deployed using the following AWS pipeline:

AWS ECR (Elastic Container Registry):

Created two separate private repositories: my-node-app and my-custom-db.

Pushed both Docker images to the cloud using AWS CLI.

AWS ECS (Task Definition):

Defined a single Task family my-project-task.

Configured Sidecar Pattern: Both the Node App and Postgres DB run in the same Task to share the network namespace (localhost).

ECS Service & Cluster:

Created a Fargate Cluster my-cluster.

Deployed a Service to maintain high availability (Desired Tasks: 1).

Configured Security Groups to allow inbound traffic on Port 3000.

📸 API Endpoints

Method

Endpoint

Description

GET

/

Health check (Returns "Backend is running!")

GET

/users

Returns JSON list of 50 seeded users from DB

Created for learning purposes to demonstrate mastery of Docker and AWS Cloud Deployment.
