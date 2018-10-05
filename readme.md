# MEAN-APP

This is a MongoDB, Express.js, Angular 6, and Node.js web application that is meant to be a playground for everything I've learned. Please note that this project is not a 'production-ready' app. 

This project is meant to be a place where I can test and expand on ideas.


## Getting Started

Make sure to install all dependencies for both 'mean-app' and 'backend' folders.
```bash
npm install
```
## After 'npm install' for both "mean-app" and "backend folders"
cd mean-app
```bash
ng serve -o
```

open at port 4200

cd back-end
```bash
npm start
```

The server will run on port 3000.

Then fire up MongoDB ()

```
mongod
```

The server persists using a Mongo database, connected through http://localhost:27017



## Development

### Client-Side
This project uses Angular 6 as client side framework. Visit https://angular.io/ for details.

This project uses TSLint to detect suspicious code in TypeScript files. Visit https://palantir.github.io/tslint/ for details.

This project uses SweetAlerts2 for pop-up modals. Visit https://sweetalert2.github.io/ for details.


### Server-Side

This project uses Mongoose, a library to manage relationships between data, schema validation, and used to translate between objects in code. Visit https://mongoosejs.com/ for details


This project uses a combination of GMAIL API and nodemailer for email service. Visit https://developers.google.com/gmail/api/ and https://nodemailer.com/about/ for details


This project uses Babel to convert ES2015+ code into a backwards compatible version of JavaScript in current and older browsers. Visit https://babeljs.io/docs/en/ for details.


# Credits

template: https://templated.co/
images: https://unsplash.com/


# Notes/TODOs

Form validaitons found throughout project need refactoring and proper implementation. A lot of items can be modularized.

Still learning how to incorporate Google OAuth2 for user validation, issuing tokens, and sign in. 

Need to implement JSON Web tokens (jwt) for authorizations of regular sign ons with email and password. Encryption of password will be provided by bcrypt.js. 

Create a login page, once items listed above are complete. 



