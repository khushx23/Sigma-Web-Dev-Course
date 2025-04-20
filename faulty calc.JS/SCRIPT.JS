let a = Number(prompt("Enter first number")) // Number() is a built-in JavaScript function that converts the argument to a number. If the argument cannot be converted, it returns NaN (Not-a-Number). In this case, it is used to convert the user input from prompt() into a number.;
     // In JavaScript, prompt() is a built-in function that shows a dialog box asking the user to input some text. It pauses script execution until the user enters a value or cancels.
let b = Number(prompt("Enter second number"));
let operator = prompt("Enter operator (+, -, *, /)")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if(Math.random() > 0.1){         //   Math.random() in JavaScript is a built-in function used to generate a pseudo-random number between 0 (inclusive) and 1 (exclusive). That means it will return a decimal number like 0.734, 0.001, etc., but never 1.

    alert(`The result is ${eval(`${a} ${operator} ${b} `)}`)
        // eval() is a built-in JavaScript function that evaluates a string as JavaScript code. It can execute any JavaScript code represented as a string, including mathematical expressions.
    // However, using eval() can be dangerous if you're evaluating user input, as it can lead to code injection vulnerabilities. It's generally recommended to avoid using eval() whenever possible and to use safer alternatives for evaluating expressions.
        
}
else{
    operator = obj[operator] // This line is using the object obj to map the operator entered by the user to a different operator. For example, if the user enters "+", it will be replaced with "-".
    alert(`The result is ${eval(`${a} ${operator} ${b}`)}`)
    // The eval() function is used here to evaluate the mathematical expression formed by the user input and the mapped operator.
}