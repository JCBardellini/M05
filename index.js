// have to create the prompt, were the user can input the users name

let userName = prompt("Please enter your name");

// after creating the prompt, i need to make a if statement
// this will check that there is something inside the prompt, if there is nothing, it will print out an alert
// if there is something inside the prompt, it will print out ("welcome userName")
// we will do this by manipulating dom, to create an a p tag

if (userName !== null && userName !== "") {
    // creating a p tag, if the condition is true 
    let msg = document.createElement("p");
    // setting the p tag to ("welcome" + user input)
    msg.innerHTML = "Welcome " + userName;

    // now i need to insert it inside the div
    // getting the div element with id="main"
    let mainDiv = document.getElementById("main");
    mainDiv.appendChild(msg);
    } else {
        // printing out an alert message if the condition is false
        alert("You must enter your name!");
}