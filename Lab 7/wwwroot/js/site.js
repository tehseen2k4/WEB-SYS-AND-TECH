// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// function logEvent(event) {
// document.getElementById("output").innerText = event.type + " event triggered!";
// }


// function showCoords(event) {
//     document.getElementById("coords").innerText = "X: " + event.clientX + " Y: " + event.clientY;
//     }
    

function focusEvent(event) { event.target.style.backgroundColor = "lightblue";
}
function blurEvent(event) { event.target.style.backgroundColor = "white";
}
function charCount() { document.getElementById("count").innerText =
document.getElementById("inputText").value.length;
}
 
function showMessage() { alert("Form submitted!");
}