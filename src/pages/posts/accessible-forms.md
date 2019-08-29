---
title: 'Accessible Forms'
date: '2019-08-29'
---

What makes a form accessible?

1. Clean HTML with [semantic](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Problems_solved_by_HTML5) tags.
2. Organized, meaningful and easy to use.
3. Use appropriate [aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) information.
4. A screen reader can make sense of the formatting.
5. Keyboard users can complete and move logically through the form.
6. All mouse and pointer events translate to keyboard events.
7. Clear visual cues when a form element is in focus.
8. Proper labels and instructions.
9. Provide clear input errors.

**Example form:**

```html
<form method="post" action="#">
  <label for="name">Name</label>
  <input
    type="text"
    name="name"
    id="name"
    required
    aria-label="Enter your name"
    aria-required="true"
  />
  <label for="email">Email</label>
  <input
    type="email"
    name="email"
    id="email"
    required
    aria-label="Enter your email"
    aria-required="true"
  />
  <fieldset>
    <legend aria-label="Select a subject">
      Select a subject:
    </legend>
    <input id="payments" type="checkbox" name="subject" value="payments" />
    <label for="payments">Payments</label>
    <input id="purchases" type="checkbox" name="subject" value="purchases" />
    <label for="purchases">Purchases</label>
    <input id="question" type="checkbox" name="subject" value="question" />
    <label for="question">Question</label>
    <input id="suggestion" type="checkbox" name="subject" value="suggestion" />
    <label for="suggestion">Suggestion</label>
  </fieldset>
  <label for="message">Message</label>
  <textarea name="message" id="message" rows="5" aria-label="Enter a message" />
  <button type="submit">Send</button>
  <input type="reset" value="Clear" />
</form>
```

**Other things to consider:**

1. You may want a [Skip Navigation](https://webaim.org/techniques/skipnav/) link at the top of your page.
   Allows a keyboard user to:

   - Skip tabbing through the entire navigation menu.
   - Get right to the main content of the site.

2. Confirm [contrast](https://a11yproject.com/posts/what-is-color-contrast/) is ok for visually impaired people.
3. Test the site with [Lighthouse](https://developers.google.com/web/tools/lighthouse/) and/or [aXe](https://www.deque.com/axe/).
4. Do your own manual tests:
   - Use the site with a screen reader.
   - Use the site with a keyboard.
