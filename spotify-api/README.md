# Spotify API – Role-Based Authentication

A mini backend learning task inspired by Spotify to practice **Role-Based Access Control (RBAC)**, password hashing, and REST API development.

## Features
- **User Role:** Can listen to songs using GET APIs.
- **Artist Role:** Can create music using POST APIs.
- **Role-Based Authorization:** Restricts API access based on user roles.
- **Password Hashing:** Uses bcrypt to hash passwords securely before storing them in the database.
- **JWT Authentication:** Authenticates users using JSON Web Tokens.
- **API Access Control:** Ensures users and artists can perform only authorized actions.

## Tech Stack
- Node.js
- Express.js
- JavaScript
- JWT Authentication
- bcryptjs
- MongoDB

## Learning Outcomes
- Understanding role-based authentication and authorization.
- Implementing secure password hashing with bcrypt.
- Implementing role-based API access.
- Working with GET and POST requests.
- Securing routes using authentication middleware.