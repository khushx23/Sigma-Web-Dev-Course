// const is a keyword in JavaScript.
// It means you're creating a variable that can't be reassigned.
// Once you set it, you can't change it to something else.
// This is just the name of the function you're creating.
// You could name it anything (loadScript, getData, runMagic, etc.).
// Good names help humans understand what the function does (here, probably "load a script").
// These are the parameters of the function.
// src: will probably be the URL of a script you want to load.
// callback: is a function you want to run after the script is loaded.

const callback=(arg)=>{
    console.log(arg);
    // This function will be called when the script is loaded.
    // It takes one argument (arg) and logs it to the console.
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = () => callback("Khushi");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// This function loads a script from the given URL (src) and runs the callback function when the script is loaded.
// callback is a function you pass to another function to run later.
// We use it because some things (like loading files) are asynchronous (they take time).
// Practically: You use it for file loading, API calls, user events, and animations — almost everywhere in modern JavaScript!


