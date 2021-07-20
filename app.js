var students = []
var num = 0

function get(id) {
    return document.getElementById(id)
}

function addmarks() {
    if (
        get("math").value == "" ||
        get("name").value == "" ||
        get("english").value == "" ||
        get("science").value == ""
    ) {
        get("info").innerHTML = "Please enter the marks of all the given subjects."
    } else {
        if (
            get("math").value > 100 ||
            get("english").value > 100 ||
            get("science").value > 100 ||
            get("math").value < 0 ||
            get("english").value < 0 ||
            get("science").value < 0
        ) {
            get("info").innerHTML = "Please enter proper marks between 0-100."
        } else {
            window["student" + num] = {
                name: get("name").value.toLowerCase(),
                math: get("math").value,
                science: get("science").value,
                english: get("english").value,
            };
            students.push(window["student" + num]);
            console.log(students)

            num++;

            // get('info').innerText = "Marks of " + num + " students entered"

            get("info").innerText = `Marks of ${num} student/s entered!`;
            get("math").value = "";
            get("science").value = "";
            get("english").value = ""


        }
    }
}


function result() {
    var input = get("stuname").value.toLowerCase()
    var output = get("output")

    for (var i = 0; i < students.length; i++) {

        var student = students[i]
        if (student.name === input) {
            var avgmarks = Math.round((Number(students[i].math) + Number(students[i].science) + Number(students[i].english)) / 3);
            output.innerHTML = `<h4>Maths:- ${student.math}</h4> <h4>English:- ${student.english}</h4> <h4>Science:- ${student.science}</h4> <h4>Average Marks:- ${avgmarks}</h4>`


        } else {
            output.innerHTML = "<h4>Student not found</h4>"


        }

    }


}