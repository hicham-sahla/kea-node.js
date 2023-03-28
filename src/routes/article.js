const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

const articles = [
  {
    slug: "what-is-node-js-and-express",
    title: "What is Node.js and Express?",
    content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server-side, enabling developers to build scalable and high-performance web applications and APIs. Express is a popular web application framework built on top of Node.js. It simplifies the process of building web applications by providing a minimal and flexible set of features to build robust applications quickly. With Express, developers can create server-side applications, handle routing, and manage the application's middleware. Middleware is a set of functions that can modify incoming requests before they reach the actual route handlers. Express makes it easy to create RESTful APIs, serve static files, and handle form submissions."
  },
  {
    slug: "variables-and-data-types-javascript-basics",
    title: "Variables and Data Types: JavaScript Basics",
    content: "JavaScript is a dynamically-typed language, which means you don't have to specify the data type of a variable when declaring it. There are several data types in JavaScript: Number, String, Boolean, Null, Undefined, and Object. Variables can be declared using the var, let, or const keywords. Var is used for declaring variables with function scope. Let is used for declaring variables with block scope. Const is used for declaring variables with block scope that cannot be reassigned after initialization."
  },
  {
    slug: "rest-api-explained-crud-operations",
    title: "REST API Explained: CRUD Operations",
    content: "REST (Representational State Transfer) is an architectural style for designing networked applications. A RESTful API is an application programming interface that adheres to the principles of REST. The key concepts of REST include stateless communication, cacheability, and a uniform interface. CRUD is an acronym for the four basic operations that can be performed on data: Create, Read, Update, and Delete. In a RESTful API, these operations correspond to HTTP methods: POST, GET, PUT or PATCH, and DELETE."
  },
  {
    slug: "code-conventions-and-clean-code-with-eslint",
    title: "Code Conventions and Clean Code with ESLint",
    content: "Writing clean and consistent code is essential for maintainability and collaboration. Code conventions are guidelines and best practices that developers follow to ensure their code is readable, efficient, and less prone to errors. Some common code conventions include naming conventions, indentation, and code organization. ESLint is a popular JavaScript linting tool that helps developers enforce code conventions and identify potential issues in their code. It is highly customizable, allowing developers to create their own rules or use predefined sets of rules from popular style guides, such as Airbnb or Google."
  },
  {
    slug: "sending-data-with-http-requests",
    title: "Sending Data with HTTP Requests: GET, POST, DELETE, etc.",
    content: "HTTP (Hypertext Transfer Protocol) is the foundation of any data exchange on the web. HTTP requests are used to communicate with APIs and web servers. There are several types of HTTP requests, each with a specific purpose: GET retrieves data from a specified resource, POST submits data to a specified resource to be processed, PUT updates an existing resource with new data, DELETE deletes a specified resource, and PATCH applies partial modifications to a resource."
  },
  {
    slug: "enviroment-variables",
    title: "Environment Variables and Their Usage",
    content: "Environment variables are key-value pairs used to configure an application's behavior. They are typically used to store sensitive data, such as API keys or database credentials, and to manage application settings across different environments (e.g., development, staging, production)"
  },
];

router.get('/:slug', isLoggedIn, (req, res) => {
  const slug = req.params.slug;
  const article = articles.find(a => a.slug === slug);

  if (article) {
    res.render('article', { article });
  } else {
    res.status(404).send('Article not found');
  }
});

module.exports = router;
module.exports.articles = articles;