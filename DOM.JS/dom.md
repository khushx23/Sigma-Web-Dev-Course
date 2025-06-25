🌳 What is the DOM?
DOM stands for Document Object Model. It's a programming interface provided by the browser that allows JavaScript to interact with, manipulate, and change the content, structure, and style of an HTML document.

When a webpage is loaded, the browser parses the HTML and creates a DOM tree, which is a hierarchical representation of the HTML elements.

📄 Visual of HTML → DOM Tree
Given this HTML:

html
Copy
Edit
```htm
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1 id="title">Hello DOM!</h1>
    <p class="message">Welcome to the Document Object Model.</p>
  </body>
</html>
```
The browser creates this DOM structure:

less
Copy
Edit
Document
 └── html
     ├── head
     │   └── title
     └── body
         ├── h1#title
         └── p.message
Each tag becomes a node (or element) in the tree, and you can interact with these nodes using JavaScript.

🛠️ Common DOM Methods & Properties
1. Accessing Elements
js
Copy
Edit
```javascript
// By ID
let title = document.getElementById("title");

// By class
let message = document.getElementsByClassName("message")[0];

// By tag
let paragraphs = document.getElementsByTagName("p");

// Modern and versatile
let firstPara = document.querySelector("p.message");
let allParas = document.querySelectorAll("p");
```
2. Modifying Content
js
Copy
Edit
```javascript
// Changing text
title.textContent = "DOM is Awesome!";

```
```javascript
// Changing HTML inside an element
message.innerHTML = "<strong>This is bold!</strong>";
```
3. Changing Styles
js
Copy
Edit
```javascript
title.style.color = "blue";
title.style.fontSize = "30px";
```
4. Creating & Adding Elements
js
Copy
Edit
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "I am new here!";
document.body.appendChild(newDiv);
```
5. Removing Elements
js
Copy
Edit
```javascript
let oldElement = document.getElementById("title");
oldElement.remove();
```
6. Handling Events
js
Copy
Edit
```javascript
let button = document.createElement("button");
button.textContent = "Click me!";
document.body.appendChild(button);

button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```
🧠 DOM is Object-Based
Every element in the DOM is an object with properties and methods. For example:

js
Copy
Edit
```javascript
console.log(title.nodeName); // "H1"
console.log(message.className); // "message"
```
🧩 Why DOM is Important in JS?
Dynamic content: Change text, images, structure on the fly

User interaction: Respond to clicks, typing, etc.

Animations: Move elements, add effects

Form handling: Validate input, submit via JS

