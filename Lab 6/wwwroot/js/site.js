// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


// Assign values using JavaScript document.getElementById("name").innerHTML = "<strong>Name:</strong> Tayyeb Hussain";
// document.getElementById("university").innerHTML = "<strong>University:</strong> Bahria University";
// document.getElementById("degree").innerHTML = "<strong>Degree:</strong> Bachelor of Computer Science";
// document.getElementById("occupation").innerHTML = "<strong>Occupation:</strong> Software Developer";


// var person = {
//     name: "Tayyeb Hussain", university: "Bahria University", degree: "Computer Science", occupation: "Software Developer"
//     };
    
    
//     var length = Object.keys(person).length;
    
    
//     document.write("Length of the object:", length);
    
// var people = [
//     { name: "Alice", age: 25 },
//     { name: "Charlie", age: 30 },
//     { name: "Bob", age: 22 }
//     ];
    
    
//     people.sort((a, b) => a.age - b.age); console.log("Sorted by age:", people);
    
//     people.sort((a, b) => a.name.localeCompare(b.name)); console.log("Sorted by name:", people);
    

document.getElementById("calculate-btn").addEventListener("click", function() {
    const gradeInputs = document.querySelectorAll(".grade-input");
    const remarks = document.querySelectorAll(".remark");
    let totalPoints = 0;
    let totalSubjects = 0;

    // Grade-to-GPA mapping
    const gradePoints = {
        "A+": 4.0,
        "A": 3.7,
        "B+": 3.3,
        "B": 3.0,
        "C+": 2.7,
        "C": 2.3,
        "D": 2.0,
        "F": 0.0
    };

    gradeInputs.forEach((input, index) => {
        let grade = input.value.toUpperCase().trim();

        if (gradePoints.hasOwnProperty(grade)) {
            totalPoints += gradePoints[grade];
            totalSubjects++;

            // Assign Remarks
            if (grade === "A+" || grade === "A") {
                remarks[index].innerText = "Excellent";
                remarks[index].style.color = "green";
            } else if (grade === "B+" || grade === "B") {
                remarks[index].innerText = "Good";
                remarks[index].style.color = "blue";
            } else if (grade === "C+" || grade === "C") {
                remarks[index].innerText = "Satisfactory";
                remarks[index].style.color = "orange";
            } else if (grade === "D") {
                remarks[index].innerText = "Pass";
                remarks[index].style.color = "brown";
            } else {
                remarks[index].innerText = "Fail";
                remarks[index].style.color = "red";
            }
        } else {
            remarks[index].innerText = "Invalid Grade";
            remarks[index].style.color = "red";
        }
    });

    // Calculate and display GPA
    let gpa = totalSubjects > 0 ? (totalPoints / totalSubjects).toFixed(2) : "N/A";
    document.getElementById("gpa-result").innerText = gpa;
});
 
