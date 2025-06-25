document.querySelector(".box") //selects the box class
document.querySelector(".box").innerHTML //returns the innerHTML of the box class
document.querySelector(".box").innerHTML = "Hello World" //sets the innerHTML of the box class to Hello World
document.querySelector(".container").innerText //returns the innerText of the box class
document.querySelector(".container").outerHTML //returns the outerHTML of the box class
document.querySelector(".box").tagName //returns the tag name of the box class, whether the container is a div or span or any other tag
document.querySelector(".box").nodeName //applicable for all the types of nodes, returns the node name of the box class.
document.querySelector(".container").hidden = true //hides the container class  
document.querySelector(".box").hasAttribute("style")//returns true if the box class has a style attribute
document.querySelector(".box").getAttribute("style")//returns the style attribute used in the box class 
document.querySelector(".container").setAttribute("style", "color: red") //sets the style attribute of the container class to color red , we can access the style using the js code as well
document.querySelector(".box").attributes //returns LL the attributes of the box class

document.designMode = "on" //turns on the design mode of any web page, we can edit the web page using this mode, alter it and make chenges. we can also turn it off by setting it to "off"
document.querySelector(".box").remove() //removes the box class from the web page
document.querySelector(".container").classlist //returns all the classes of the container class
document.querySelector(".container").className //returns the class name of the container class

document.querySelector(".container").classList.add("newClass") //adds a new class to the container class, we can also add multiple classes by separating them with a space
document.querySelector(".container").classList.remove("newClass") //removes the new class from the container class

document.querySelector(".container").classList.toggle("newClass") //toggles the new class of the container class, if it is present it removes it, if it is not present it adds it