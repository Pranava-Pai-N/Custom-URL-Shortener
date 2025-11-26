# Custom URL Shortener -- Backend (Node.js, Express, MongoDB)

A backend-only custom URL shortener built using Node.js, Express,
MongoDB, and MVC architecture (Models, Controllers, Routes). Supports
automatic short ID generation, custom aliases, and click tracking.

## Folder Structure
```
URL-Shortener/
├── controllers
│   └── url.controller.js
├── models/
│   └── url.models.js
├── routes/
│   └── url.routes.js
├── utils/
│   └── db.js
├── .env
├── .env.sample
├── .giignore
├── server.js
├── package-lock.json
├── package.json
└── README.md
```
## Features

-   Create short URLs automatically or using a custom alias\
-   Redirect handling with automatic click count increment\
-   Prevents duplicate custom URLs\
-   Clean separation using MVC pattern\
-   Environment variable support for database and backend URL\
-   Tracks total number of clicks per short URL

## Installation & Setup

1.  Clone the repository
```
git clone https://github.com/Pranava-Pai-N/Custom-URL-Shortener.git
```

2.  Install dependencies
```
npm install
```
3.  Add environment variables for MongoDB URL, backend URL, and port
```
PORT=PORT || 3000
MONGODB_URL=URL
BACKEND_URL=http://localhost:PORT/api/url

```
4.  Start the backend server
```
npm run dev
```

The backend will run locally on the configured port (default is usually
3000).

## API Overview

### Create Shortened URL

Endpoint to generate a short URL. Supports both automatic nanoid
generation and user-defined custom aliases.

### Redirect to Original URL

Accessing a shortened path automatically redirects the user to the
original long URL and increments the click counter.

### Fetch URL Statistics

Returns details such as original URL, short ID, shortened URL, click
count, and timestamps.

## Architecture Explanation

### Models

Contains the MongoDB schema definition for URLs. Stores fields such as
original URL, shortened URL, short ID, and userClicks.

### Controllers

Contains all application logic such as validating input, generating IDs,
saving URLs, handling redirects, and updating click counts.

### Routes

Defines all REST API routes and maps them to the corresponding
controller functions.

### Utils

Contains helper utilities such as database connection logic using
Mongoose.

### Server

Main application file that loads environment variables, connects to
MongoDB, sets up middleware, registers routes, and starts the HTTP
server.

## Tech Stack

-   Node.js
-   Express.js
-   MongoDB with Mongoose
-   Nanoid for ID generation
-   Dotenv for environment configuration

## Example MongoDB Document Structure

-   Original redirect URL
-   Auto-generated or user-defined shortId
-   Complete shortened URL including backend domain
-   Total userClicks
-   Created and updated timestamps

## License

This project is licensed under the MIT License.
