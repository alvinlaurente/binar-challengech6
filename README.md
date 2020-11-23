# binar-challengech6

Binar Academy Full Stack Web Development Challenge Chapter 6 - Database with PostgreSQL (Sequelize)

### Step-by-step to run the app

1. Clone the repository.
2. Run in terminal : `npm install` to install all required packages that listed in **_packages.json_**.
3. Make database in pgAdmin.
4. Make your own **_.env_** environment file based on **_.env.example_**. Make sure the database name is right. Also specify the session name & secret for cookies.
5. Migrate database tables and populate seeders.
6. Run **Server** in terminal using : `npm run start` or `yarn start`.

### STEP-BY-STEP to Test middlewares & controllers (for example, I will use port 3000)
1. Go to index page, you can enter `localhost:3000/` or `localhost:3000/index` or `localhost:3000/home`. The result will be the same, index page.
2. You're not logged in yet, so you couldn't access private routes. Try to access `localhost:3000/profile` or play the game by clicking **PLAY NOW** button on index page. The server will redirect you to login page (`localhost:3000/auth/login`).
3. If you have not registered yet, you can register first by clicking **SIGN UP** button (`localhost:3000/auth/signup`) in the top right side
4. Test the basic form validation. You can find the requirement to fill the form inside middlewares > validation folder. If all conditions are not met, the server will return an error message.
5. If the Sign up/registration is successful, check new user entry in db. Also see that the given password has been hashed by bcrypt.
6. Try to login with any credentials from seeder or your own registered account. You also can test the basic form validation here. Also because server use bcrypt, server will compare the inputed password with the hashed one from db. If the login is succesful, you will be redirected by server to index page again. Now see that in the top right side that the navbar menu has changed.
7. Now you are logged in, so you can't access `localhost:3000/auth/signup` or `localhost:3000/auth/login` anymore. Try to test it from browser URL. If you try to access them, you will be directed to index page.
8. When you logged in, server will give you cookies and session that expires for 2 hours. This cookies required to authenticate user login. If the cookies expired or deleted, user need to login again.
9. Click **LOGGED IN AS username** in right side of navbar to go to your profile. This is your profile biodata. You can edit profile, change password or delete all user data.
10. Now try to edit profile first by clicking **EDIT PROFILE** button. Here, all form fields are not set as required field. So you can edit 1 or 2 things, or even nothing. But, some validation still works here. If you're done, click **SUBMIT** button. If you leave the form without filling any fields, the submit won't change any data. Email and username can't be changed. Once used, you need another to do another registration. You will be redirected to profile page after click the **SUBMIT** button. See if any of your profile data has changed.
11. Now try to change your password by clicking **CHANGE PASSWORD** button in profile page. Try the validation again. You can't use old password as your new password. Again, bcrypt will do their task to compare and hash the password.
12. Now go back to index page or just jump into game page by enter `localhost:3000/rockpaperscissor`. You can see that you are playing against com. Try to play some games. The **REFRESH** button on the bottom also acts as the trigger to post game history.
13. After some games, you could check your game history by clicking **SEE GAME HISTORY** button on the top right side of game page. The list of your userGameHistories table from database will be sorted from newest to oldest by timestamps. In the right side, you can click &#10060; button to delete the specific game history.
14. If you're done, go back to your profile and now try delete all user data by clicking **DELETE ALL USER DATA** button. You will be logged out (this is the same thing will be happen if you click **LOG OUT** button in navbar, but without delete the data). Your cookies and session will also be destroyed after Log out or delete all user data. Check the database that all data that associated to the user also gone (game histories and user biodata/profile).

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
- middlewares -> express-session authentication & joi validation.
- migrations -> migration for db tables.
- models -> model mapping.
- routes -> web routes.
- seeders -> populate dummy data into migrated db tables.
- views -> act as views in MVC pattern using EJS.