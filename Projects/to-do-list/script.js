const inputBox = document.getElementById("taskInput");
const listContainer = document.getElementById("list-container");
function addTask() {
    if(inputBox.value === ""){

    alert("Please enter a task");
    }
    else{
        let li = document.createElement("li"); // Create a new list item
        li.innerHTML = inputBox.value; // Set the text of the list item to the input value
        listContainer.appendChild(li); // Append the new list item to the list container
        let span = document.createElement("span"); // Create a new span element
        span.innerHTML= "\u00d7"; // Set the text of the span to "×"
        li.appendChild(span); // Append the span to the list item

    }
    inputBox.value = ""; // Clear the input box after adding the task

    savedata(); // Call the function to save the data to local storage

}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); // Toggle the "checked" class on the clicked list item
        savedata(); // Call the function to save the data to local storage
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); // Remove the parent list item of the clicked span
        savedata(); // Call the function to save the data to local storage
    }
}, false); // Add an event listener to the list container for click events

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML); // Save the inner HTML of the list container to local storage
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); // Retrieve the saved data from local storage and set it as the inner HTML of the list container
}
showTask();