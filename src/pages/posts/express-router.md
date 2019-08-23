---
title: 'Express Router'
date: '2019-08-21'
---

- Express Router is a middleware for creating modular route handlers.<!-- end -->
- It groups route handlers based on common parts of the route paths / uri (endpoints).
- It provides methods for all HTTP verbs[1].
- It allows variables to be stored in the route -> route parameters.
- route parameters are proceeded by a colon -> :id.
- It stores the parameters in req.params.
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

Example code:

```js
const express = require('express');
const songRouter = express.Router();

songRouter
  .route('/song')
  .get((req, res) => {
   /* do stuff */
  })
  .post((req, res) => {
    /* do stuff */
  });
   .delete((req, res) => {
    /* do stuff */
  });

songRouter
  .route('/song/:id')
  .get((req, res) => {
    /* do stuff */
  })
  .post((req, res) => {
    /* do stuff */
  });
   .delete((req, res) => {
    /* do stuff */
  });

module.exports = songRouter;
```

**[1] Main HTTP verbs:**

  `get()`,  `post()`, `put()`, `delete()`, `options()`, `patch()`, `head()`,`connect()`.
  