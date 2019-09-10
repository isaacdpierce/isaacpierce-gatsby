---
title: 'How to create HTML with JavaScript'
date: '2019-09-06'
---

- Create the element tag:\
    `const btn = document.createElement('button')`
- Create text for the element:\
    `const btnText = document.createTextNode('Click me')`
- Add the text to the element:\
    `btn.appendChild(btnTxt)`
- Create any element attributes:
    `const primaryBtnClass = document.createAttribute("class");`
- Give the attribute a value:\
    `primaryBtnClass.value = "btn__primary"`
- Set the attribute:\
    `btn.setAttributeNode(primaryBtnClass);`
- Add a style:\
    `btn.style.backgroundColor = 'blue'`
- Append element with text node to the document:\
    `document.body.appendChild(header)`

**Put it all together:**

```js
<html>
  <body>

    <button onclick="createHeader()">
      Create Heading
    </button>

    <script>

      const createHeader = () => {
        const header = document.createElement('h1');
        const headerText =
         document.createTextNode(`I'm the header`);
        header.appendChild(headerText);
        const headerClass = 
        document.createAttribute('class');
        headerClass.value = 'header__main';
        header.setAttributeNode(headerClass);
        header.style.color = 'purple';
        document.body.appendChild(header);
      };

    </script>

  </body>
</html>
```

**Have a swell day!**
