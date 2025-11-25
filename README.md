# Containerizing PostgreSQL Database

A Node.js backend with PostgreSQL database, both containerized and deployed on AWS ECS.

## What This Project Does

This project runs a Node.js API and PostgreSQL database in Docker containers. Both containers run together in AWS ECS, talking to each other via localhost.

## Tech Stack

- Node.js & Express
- PostgreSQL
- Docker
- AWS ECS & Fargate

## Project Structure

```
├── Dockerfile          # Backend container
├── Dockerfile.db       # Database container
├── init.sql           # Database setup with 50 dummy users
├── server.js          # Express API
├── docker-compose.yml # Local development
└── package.json       # Dependencies
```

## Run Locally

```bash
# Clone the repo
git clone https://github.com/Bilalshah1/Contanerizing-postgres-database.git
cd Contanerizing-postgres-database

# Start containers
docker-compose up --build

# Access the app
# http://localhost:3000/users
```

## API Endpoints

- `GET /` - Health check
- `GET /users` - Get all users from database

## AWS Deployment

### 1. Build and push images to ECR

```bash
# Build images
docker build -t my-node-app .
docker build -t my-custom-db -f Dockerfile.db .

# Login to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com

# Tag and push
docker tag my-node-app:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/my-node-app:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/my-node-app:latest

docker tag my-custom-db:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/my-custom-db:latest
docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/my-custom-db:latest
```

### 2. Create ECS Task Definition

Define both containers in one task so they can communicate via localhost.

### 3. Deploy to ECS

Create a Fargate cluster and service, then configure security groups to allow traffic on port 3000.

## Environment Variables

```
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydb
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```
