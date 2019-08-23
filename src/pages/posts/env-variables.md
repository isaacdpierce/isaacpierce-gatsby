---
title: 'Environment variables'
date: '2019-08-24'
---

- A variable whose value is set and stored outside of the program.
- The functionality is built into the development environment's operating system or the hosting service.

###### process.env

[`process`](https://nodejs.org/dist/latest-v8.x/docs/api/process.html) - is the global object in Node.js that stores built in functionality and properties.

To view -> enter in command-line:

- $ `node`
- $ `console.log(process)`

`env` - the property created by Node on the `process` object that stores environmental variables as key/value pairs.

To view -> enter in command-line:

- $ `node`
- $ `console.log(process.env)`

**Creating local .env variables:**

- create .gitignore file in the root of your project
- create a .env file in the root of your project
- add .env to .gitignore file
- name a variable in all caps -> API_KEY
- give a value to the variable -> API_KEY='12i34123g5134kjh5g3'

**Accessing local .env variables:**

- install dotenv npm package:

`npn i dotenv`

- require [dotenv](https://www.npmjs.com/package/dotenv) into your project:

`if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); }`

- access any variable values stored in the .env file with:

`process.env.VARIABLE_NAME`

**Environment variables in Create React App:**

- Create React App already includes the dotenv package.
- Create React App calls dotenv.config() for you in node_modules.
- Create React App populates process.env with the contents of the .env file when you start the app.
- You must prefix your env variables with REACT_APP.

eg. `REACT_APP_VARIABLE_NAME`

From Create React APP [docs](https://create-react-app.dev/docs/adding-custom-environment-variables):

_WARNING:_ 

- Do not store any secrets (such as private API keys) in your React app!

- Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

Checkout Jim Medlock's [article](https://medium.com/chingu/protect-application-assets-how-to-secure-your-secrets-a4165550c5fb) for more info.
