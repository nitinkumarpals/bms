# DevOps Practice Project with Turborepo

This repository is a monorepo setup using Turborepo that combines Next.js for the frontend and an Express.js WebSocket server for the backend. The primary goal of this project is to practice DevOps concepts, specifically CI/CD pipelines and AWS EC2 deployments.

## Project Overview

This project is designed for hands-on practice with:

- **CI/CD Pipelines:** Automate testing, building, and deployment.
- **AWS EC2 Deployment:** Deploy applications to AWS EC2 instances.
- **Containerization:** Use Docker for consistent runtime environments.
- **Infrastructure as Code (IaC):** Manage infrastructure using tools like Terraform or CloudFormation.

## Tech Stack

- **Frontend:** Next.js
- **Backend:** Express.js with WebSocket
- **Build Tool:** Turborepo
- **Package Manager:** pnpm
- **Database:** PostgreSQL with Prisma (in the `db` package)

## Repository Structure

    - apps/web: Next.js frontend
    - apps/api: Express.js backend
    - packages/ui: Shared UI components
    - packages/db: Database models and queries
    - packages/eslint-config: ESLint configuration
    - packages/typescript-config: TypeScript configuration
    - packages/utils: Utility functions

## DevOps Features

- CI/CD Pipeline using GitHub Actions
- AWS EC2 Deployment
- Docker Containerization
- Infrastructure as Code (IaC)

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- pnpm
- Docker (optional, for containerization)
- AWS account credentials (for deployment)

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/nitinkumarpals/bms.git
   cd bms
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**
   Copy the example environment file and edit as needed:

   ```bash
   cp .env.example .env
   ```

4. **Start Development Servers**
   ```bash
   pnpm dev
   ```

## CI/CD Pipeline & AWS EC2 Deployment

This project is tailored for practicing real-world DevOps workflows:

- **CI/CD with GitHub Actions:** Automate linting, testing, and building processes.
- **Docker Containerization:** Create Docker images for both the frontend and backend applications.
- **AWS EC2 Deployment:** Deploy Dockerized applications on AWS EC2 instances.
- **Infrastructure as Code (IaC):** Provision and manage AWS resources using Terraform or CloudFormation.

### Example CI/CD Workflow

- **Code Quality:** Lint and run tests on every pull request.
- **Build & Package:** Build the Next.js and Express.js applications, package them in Docker containers.
- **Deploy:** Push Docker images to a container registry and deploy to AWS EC2 via automated scripts.

## Contributing

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Open a pull request detailing your changes.

## License

This project is licensed under the MIT License.
