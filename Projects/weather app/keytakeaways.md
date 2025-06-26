## rem is better for responsiveness:
Adapts to screen size via media queries (e.g., scaling html { font-size })
Improves usability for users with visual impairments
Keeps design modular and proportional

 ## API (Application Programming Interface) :
is a set of rules that allows different software applications to communicate with each other. In web development, it acts like a waiter in a restaurant — you (the client) send a request, the API processes it, and sends back the result (usually data in JSON format). For example, a weather app uses an API to request real-time weather data from a weather service. APIs use methods like GET or POST to exchange data over the internet and are essential for connecting frontend interfaces with backend services. They make it possible to access external features like maps, payments, or logins, without building them from scratch.

 ## 1. Asynchronous Programming
In real-world applications, some operations take time—like:

Fetching data from a server (API calls)

Reading/writing files

Waiting for a timer

Database queries

Instead of blocking the whole program while waiting, asynchronous programming lets the program keep running while waiting for those slow operations to complete.
An async function lets you use the await keyword inside it, which pauses the function execution until a Promise (or equivalent async task) is resolved:
