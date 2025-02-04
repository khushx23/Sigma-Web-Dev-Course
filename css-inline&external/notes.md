# WAYS TO ADD CSS
There are three different ways to add CSS to an HTML page, which are:

- Inline CSS
- Internal CSS
- External CSS

## INLINE CSS:
Inline CSS is used to add custom properties to specific elements. The added style will only reflect on that particular element only.

To use inline CSS, Insert the "style" attribute within the HTML element's opening tag.

Consider the code snippet:
```html
<h1 style="color: purple;">I'm harry</h1>
<h2>I'm CodeWithHarry</h2>
```
##  Internal CSS:
Internal CSS is used to apply custom style to the multiple elements on the same page. The style can be used throughout the HTML page.

Internal CSS is defined in a style block, which will be inside the head section.
Consider the code snippet:
```html
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>

<body>
    <h1>CodeWithHarry</h1>
    <p>I'm harry, from CodeWithHarry</p>
    <p>I'm a Developer and founder of CodeWithHarry.com</p>
</body>

</html>
```
## External CSS:
External CSS works similarly to internal CSS but with a twist. Instead of adding the styles within the HTML file, we create a separate file with .css extension. This file will hold all the styling details. Then, we link this file to the HTML page, giving it the instructions on how to look. 

