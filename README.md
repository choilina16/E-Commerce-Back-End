# E-Commerce-Back-End
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Description
Back end for an e-commerce site using Sequelize to interact with a MySQL database

## Visuals
https://user-images.githubusercontent.com/100983245/166167548-b30d48e3-a40c-4d50-99ff-5ff22f09552b.mp4

## Table of Contents
1. [Objective](#objective)
2. [Acceptance Criteria](#acceptance-criteria)
3. [Installation Instructions](#installation-instructions)
4. [Acknowledgments](#acknowledgments)

## Objective
Build a back end for an e-commerce site. You’ll configure a working Express.js API to use Sequelize to interact with a MySQL database.

## Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Installation Instructions
1. `npm i`
2. Please update the `connection.js` + create an `.env` file to include:
  - `DB_NAME=ecommerce_db
  - `DB_USER=yourusername`
  - `DB_PASSWORD=yourpassword`
3. In mySQL, `SOURSE db/schema.sql;`
4. In terminal, `node seeds/index.js`
5. In terminal, `node server.js`
6. Go to Insomnia to test out the GET, POST, PUT, DELETE request

## Acknowledgments 
Showing appreciation to our study group! 
* Anthony Chang
* James Edwards
* Brian Samuels
* Seamona Stewart
