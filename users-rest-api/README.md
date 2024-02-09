# Angular + NodeJS Users Rest Api

## Goal

Show the use of Angular services to consume local and remote end-points, provided localy by NodeJS and ExpressJS and remotly using JsonPlaceHolder Services. We will be using Angular 17+ with stand-alone component and services.

---

## Fetching Users from my NodeJS (and ExpressJS) Rest API

```js
// Front-End
🅰️ Creating an Angular app + Angular Material
 - Initialise GIT repo from GITHUB
 - Create APP:
    - ng new users-rest-api --style=scss
    - code .
    - cd /user-rest-api/npm start
🎨 Adding Angular Material UI
    - ng add @angular/material
➕ Adding the HttpClient
    - mkdir services
    - cd src/app/services
    - ng g s API-user
    - mkdir models
    - cd src/app/services
    - ng g i users
    - using HTTP Client
📚 Defining service & interface
    - user Interface (based on https://jsonplaceholder.typicode.com/users)
👥 Fetching & Displaying users
```

```js
// Back-end
🧨 Endpoint Customisation
    - Moving out from `jsonplaceholder` to local NodeJS Rest API
    - mkdir rest-api-nodejs
    - cd rest-api-nodejs
✨ initialising NodeJS with ExpressJS 
    - npm init -y
    - npm i express
    - npm i morgan
    - npm i cors
    - notepad server.js (add content)
    - node --loader ts-node/esm server.cjs
    - Adjust the `package.json` from "type": "module" to use imports
    - Test API end-point: http://localhost:3000/users
🎇 Adding Image Source for Users
    - Using RoboHash for random images (https://robohash.org/${user.id}.png?set=set1&size=45x4)
    - Test App: http://localhost:4200/
```

```js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

// mock users locally to be served
const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  }
];

app.use(cors()); // Enable CORS for all routes

// Checking if the application is in development mode
// If it is, morgan middleware is added to the express application to log HTTP requests
if(process.env.MODE === 'development'){
  app.use(morgan('dev'))  
}

app.use(express.json());

app.get('/users', (req, res) => {
  res.json(users);
});

// Starting the express server and listening for connections on the specified port.
app.listen(PORT, (err) =>  
    (err) ? console.error(`Failed to start server: ${err}`) :  console.log(`Server running on: ${PORT}`)
);
```

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
