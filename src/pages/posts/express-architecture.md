---
title: 'Architecture and setup of a basic Express application'
date: '2019-08-19'
---

**Express:**

- A framework for building web servers in Node.js.
- Reads and interprets HTTP requests from clients.<!-- end -->
- Passes a request through functions (middleware) to process the request.
- Responds to a client with information and data resolutions.

**Architecture:**

Express combines middleware to modify request data

`express()` - is the top-level function that creates the Express application and allows access to the 4 Express objects:

1. _Application_ - `app` - Exposes the methods to handle HTTP requests, allows configuration of middleware and much more.
2. _Request_ - `req` - An object with properties describing the request from a client (url, domain, host, port, headers, body, etc. ) - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request).
3. _Response_ - `res` - An object with properties describing the response sent to a client from the server -> It includes methods for handling routing, setting the status/headers and formatting the response. - [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Response)
4. _Router_ - Creates modular route handlers. Referred to as a mini-app. [More](https://www.isaacpierce.io/express-router/)

**Response Methods:**

- `res.download()`
- `res.end()`
- `res.json()`
- `res.jsonp()`
- `res.redirect()`
- `res.render()`
- `res.send()`
- `res.sendFile()`
- `res.sendStatus()`

###### Express SETUP

1. create a new project directory
2. inside new directory -> `npm init`
3. create a new file inside new directory -> `app.js`
4. create a script in package.json:

    ```js
    "script": {
    "start": "node app.js"
    }
    ```

5. `npm install express`
6. In app.js add to top of file:

   `const express = require('express');`

7. Invoke the Express function and assign it to app:

   `const app = express();`

8. Test the root route -> create a function:

   ```js
   app.get('/', (req, res) => {
     res.send('Hello World!');
   });
   ```

9. Create a listening function:

   ```js
   app.listen(8000, () => {
     console.log('Express server is listening on port 8000!');
   });
   ```

10. `npm start` - Go to localhost:8000 to see 'Hello World!"

The complete app.js looks like this:

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World.');
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});
```
