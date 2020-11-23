# binar-challengech6

Binar Academy Full Stack Web Development Challenge Chapter 6 - Database with PostgreSQL (Sequelize)

### Step-by-step to run the app

1. Clone the repo.
2. Open directory.
3. Run in terminal : `npm install` to install all required packages that listed in **_packages.json_**.
4. Make database in pgAdmin.
5. Make your own **_.env_** environment file based on **_.env.example_**.
6. Migrate database tables and populate seeders with custom script : `npm run db:refresh:all` or `yarn db:refresh:all`
7. Run **Server** in terminal : `npm run start` or `yarn start`.

### Packages used :

- Babel.js : Transcompiler
- Express : Node.js Framework
- dotenv : Environment
- EJS : View Engine
- ESLint : Linter - airbnb based
- Morgan : Logger (see the log on node console)
- Sequelize : ORM for PostgreSQL
- bcrypt : Password hashing
- Joi : Form Validation
- express-session : Authentication (Session & Cookies)
- method-override : Override POST method in form
- Helmet : Secure HTTP headers

### Folders :

- public -> Serve static files (css, images, js, etc).
- configs -> config file(s).
- controllers -> controllers for user interactions.
- middlewares -> express-session & joi schema
- migrations -> migration for db tables.
- models -> model mapping.
- routes -> web routes.
- seeders
- views -> act as views in MVC pattern using EJS.