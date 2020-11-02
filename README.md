# binar-challengech5

Binar Academy Full Stack Web Development Challenge Chapter 5 - Migrating to Node.js

### Step-by-step to run the app

1. Clone the repo.
2. Open directory.
3. Run in terminal : `npm install` to install all required packages that listed in **_packages.json_**.
4. Run **Server** in terminal : `npm start`
6. To test if the routes work, try to click the **1st image** of carousel (_Rock Paper Scissor_ image).
7. Try to go to undefined routes (ex: `localhost:3000/abcde` or `localhost:3000/login`) and you will be redirected into **404 page**.

### Packages used :

- Babel : Transpiler
- Express : Node.js Framework
- EJS : View Engine
- ESLint : Linter - airbnb based
- Morgan : Logger (see the log on node console)

### Folders :

- controllers -> act as controller in MVC pattern.
- models -> act as data model in MVC pattern.
- routes -> web routes
- views -> act as views in MVC pattern using EJS.
- public -> Serve static files (css, images, js)