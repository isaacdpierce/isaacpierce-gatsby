---
title: 'XSS attacks in React'
date: '2019-08-24'
---

_XSS = Cross-site scripting._

- A web application allows user input that is not validated or encoded.
- Malicious code (script) is injected into the web application.
- The malicious script can then be delivered to other users. <!-- end -->
- The malicious script can access cookies, session tokens and other sensitive information retained by the browser.
- The private data can be transmitted back to the attacker.
- An attacker can do terrible things with said data.

_Types of XSS attacks:_

**Stored XXS (Persistent):**

- Malicious user input is sent to a trusted target server (eg. message board, comment, forum).
- The malicious script is permanently stored on the server.
- Innocent users access the trusted website with hidden malicious content.
- The nasty script can then be permanently stored in every innocent visitors browser.

**Reflected XSS (Non-Persistent):**

- A malicious script is injected into a vulnerable site.
- An attacker creates a malicious link and fishes for users to click it (email, comments, social media).
- After clicking the user is sent the exploited site with injected malicious scripts
- The malicious script is 'reflected' back to the innocent users browser

**DOM Based XSS:**

- Malicious modifications of the DOM environment on the victim's browser.
- The attackers code is not sent from the servers HTTP response object.
- It is in the client side script at runtime.

**Solutions in JavaScript:**

- avoid use `innerHTML`
- if you do **need** to use `innerHTML` sanitize[1] it
- do use `textContent`

**Solutions in React:**

React takes care of a lot of client side security risks.

_Better safe than sorry:_

- Avoid using dangerouslySetInnerHTML.
- Unit Test your components

_ALWAYS SANITIZE_ the following:

1. dangerouslySetInnerHTML
2. a.href attribute
3. users input from forms

###### Sanitizing libraries

1. [DOMPurify](https://www.npmjs.com/package/dompurify) - sanitizes HTML and prevents XSS attacks
2. [xss](https://www.npmjs.com/package/xss) - filter input from users to prevent XSS attacks.
3. [xss-filters](https://www.npmjs.com/package/xss-filters) - Just sufficient output filtering to prevent XSS!

[Ron Perris](https://medium.com/javascript-security/avoiding-xss-in-react-is-still-hard-d2b5c7ad9412) suggests whitelist validation for data passed as props with the url-parse npm package:

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import URL from 'url-parse';

class SafeURL extends Component {
  isSafe(dangerousURL, text) {
    const url = URL(dangerousURL, {});
    if (url.protocol === 'javascript:') return false;
    if (url.protocol === '') return false;
    return true;
  }
  render() {
    const dangerousURL = this.props.dangerousURL;
    const safeURL = this.isSafe(dangerousURL) ? dangerousURL : null;
    return <a href={safeURL}>{this.props.text}</a>;
  }
}
ReactDOM.render(
  <SafeURL dangerousURL=' javascript: alert(1)' text='Click me!' />,
  document.getElementById('root')
);
```

- [Carlos Santana](https://www.dev.education/blog/2019/01/22/preventing-xss-vulnerabilities-in-react) suggests a REGEX script to escape all `<script>` tags and events from tags.

```js
const removeXSSAttacks = html => {
  const SCRIPT_REGEX = /<script[^<]*(?:(?!</script>)<[^<]*)*</script>/gi;

  // Removing the <script> tags
  while (SCRIPT_REGEX.test(html)) {
    html = html.replace(SCRIPT_REGEX, '');
  }

  // Removing all events from tags...
  html = html.replace(/ onw+="[^"]*"/g, '');

  return html;
};
```

- [Carlos Santana](https://www.dev.education/blog/2019/01/22/preventing-xss-vulnerabilities-in-react) suggests the [serialize-javascript](https://www.npmjs.com/package/serialize-javascript) npm package to stringify instead of JSON.stringify.

- [Chris Ferdinandi](https://gomakethings.com/preventing-cross-site-scripting-attacks-when-using-innerhtml-in-vanilla-javascript/) suggests a sanitizeHTML() function to remove unwanted characters.

```js
/*!
 * Sanitize and encode all HTML in a user-submitted string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} str  The user-submitted string
 * @return {String} str  The sanitized string
 */
var sanitizeHTML = function(str) {
  var temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};
```

- [Wes Bos](https://wesbos.com/sanitize-html-es6-template-strings/) suggests template strings with the [DOMPurify](https://www.npmjs.com/package/dompurify) package.

For full details on preventing XSS attacks see the [OWASP cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

[1] Sanitize

- remove disallowed markup.
- `<script>`, `<object>,` <`embed>`, and `<link>` are removed by the sanitization process.
- also dangerous attributes like onclick.
