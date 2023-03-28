# Node.js Website with Authentication for KEA NodeJS full stack development

This is a simple Node.js website with authentication using Express, EJS, and Bootstrap 5. The application demonstrates route protection and basic login functionality with hardcoded email and password credentials.

## Features

- Server-side rendering (SSR) with EJS
- Route protection
- Bootstrap 5 for responsive design
- SCSS for custom styling
- Session management using `express-session`

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/node-website.git

```

2. Install the dependencies:

```bash
npm install

```

3. Start the development server:

```bash
npm run dev

```

4. Open your browser and visit http://localhost:3000

## Login Credentials
- The application uses hardcoded email and password credentials for demonstration purposes:

- Email: admin@admin.com
- Password: admin

## Development Tasks
- npm run dev - Starts the development server with SCSS compilation and auto-reloading
- npm run compile:scss - Compiles and minifies SCSS files to the public/css directory
- npm run watch:scss - Watches SCSS files for changes and compiles them automatically
- npm run start - Starts the Express server without auto-reloading
- npm-run-all --parallel server watch:scss - Starts both the server with nodemon and the SCSS compiler using npm-run-all

## Customization
You can customize the application by modifying the EJS templates, SCSS files, and Express routes.

- src/views - EJS templates
- src/scss - SCSS files
- src/app.js - Express routes
## License
- This project is licensed under the MIT License.
