---
title: 'HTTPS Request / Response Life-cycle'
date: '2019-08-22'
---


User enters url -> Browser sends request -> Server parses url && header -> Server sends response object. <!-- end -->

1. User enters a URL**[1]** `https://host:port/path/querystring`
2. Browser sends Request Object**[2]**
3. Server parses the url and header to handle the request
   - Finds the HTTP methods**[3]**
   - maps the request to a function that handles the request
   - executes the function and forms the `response`
   - if needed the function will interact with the database
   - formats the `response`
   - sets the status of the `response` (eg. 200 (ok), 404 (not found))

4. Server sends the Response Object**[4]** back to the users browser
   - browser stores and displays `response`

**[1] URL:**

- _protocol_ - Usually `HTTP://` or `HTTPS://` - Other common protocols are FTP, SSH, and POP3.
- _domain_ -` www.getsomestuff.com`
- _port_ - :80 - points to a specific application on a machine
- _path_ - `the/file/you/want`
- _query_ - `?key1=value1&key2=value2&key3=value3` - this is not part of the routing of the request - it is the data passed into the function that is executed once the location is resolved

**[2] Request Object:**

- The object that represents the HTTP request.
- By convention it's named `req`
- It has information about the location and the data that is being requested by a user
- It includes information about the User-Agent (browser), user preferred language, the host, encoding, connections and more.
- The data includes the type of request, methods for resolving the type of data returned, any parameters, body, headers and more.
- see [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request) for more info

**[3] HTTP methods:**

- `GET`/`POST`/`PUT`/`HEAD`/`DELETE`/`PATCH`/`OPTIONS`

**[4] Response Object:**

- The response that is sent to a client from a server after the request is completed.
- By convention it's named `res`
- Includes data, type, url, status, statusText, body, headers and more.
- It contains methods for dealing with the data including error, and promises for resolving the data in specific formats (eg. arrayBuffer, blob, json).
  