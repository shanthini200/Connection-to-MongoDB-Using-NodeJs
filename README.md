# Connection-to-MongoDB-Using-NodeJs
- Connecting to an Atlas Cluster in Node.js Applications

This project demonstrates how to connect a Node.js application to a **MongoDB Atlas cluster** using the official **MongoDB Node.js Driver**.

## Features

- Connects to a **MongoDB Atlas Cluster**
- Uses **Node.js** and **MongoDB native driver**
- Clean folder structure for easy understanding
- Ready-to-use sample code for establishing and testing DB connection.

## Project Structure

```bash
mg(con_node)/
│
├── node_modules/ # Installed dependencies
├── .env # MongoDB Atlas URI (not pushed to GitHub)
├── index.js # Main application entry point
├── package.json # Project metadata and scripts
└── README.md # Project documentation
```

## Tech Used

```bash
- Node.js
- MongoDB Atlas
- MongoDB Node.js Driver (`mongodb`)
- dotenv (for secure URI management)
```

## Set Up Instructions

### 1.Clone the Repository

```bash
git clone https://github.com/shanthini200/Connection-to-MongoDB-Using-NodeJs.git
cd Connection-to-MongoDB-Using-NodeJs
```

## 2.Install Dependencies
```bash
npm install
```

## 3.Configure .env
- Create a .env file in the root directory:
```
env
ATLAS_URI=your_mongodb_atlas_connection_string             //string you get by connecting a cluster at atlas site.
```
- Replace your_mongodb_atlas_connection_string with the URI from your Atlas dashboard.

## Run the Application
```bash
node app.js
```

## Outcome
```
MongoDB Connected Successfully!
```

## Author
Shandhini Parthiban
- 🔗 GitHub: @shanthini200
