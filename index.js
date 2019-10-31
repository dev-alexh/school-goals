document.addEventListener("DOMContentLoaded", function (event) {
    tryLoad(); //try to load contents from local storage (if possible)

    function tryLoad() {
        if (localStorage.getItem('goals') != null) {
            let goals = JSON.parse(localStorage.getItem('goals'));
            document.getElementById("name").value = goals.name;
            document.getElementById("course").value = goals.course;
            document.getElementById("textbook").value = goals.textbook;
            document.getElementById("page").value = goals.page;
            document.getElementById("prof").value = goals.prof;
            document.getElementById("notes").value = goals.notes;
        }
    }
});

var storeInfo = { "name": '', "course": '', "textbook": '', "page": '', "prof": '', "notes": '' };
var removed = false;

//remove fields on click
function removeFields() {
    var removeItem = document.getElementById("removeItem");
    var itemPage = document.getElementById("itemPage");
    var itemText = document.getElementById("itemText");

    removeItem.remove();
    itemPage.remove();
    itemText.remove();

    storeInfo.textbook = '';
    storeInfo.page = '';
    removed = true;
}

//validate the fields
function checkNotes() {
    var errString = "";
    var name = document.getElementById("name").value;
    var course = document.getElementById("course").value;
    var prof = document.getElementById("prof").value;
    var notes = document.getElementById("notes").value;
    if (!removed) {
        storeInfo.textbook = document.getElementById("textbook").value;
        storeInfo.page = document.getElementById("page").value;
    }

    if (!name.match(/^[A-Za-z][A-Za-z'.-]+(\s[A-Za-z][A-Za-z'.-]+)*$/gm)) {
        name = '';
        errString += "Please check your name again!\n";
    }

    if (!course.match(/^[A-Z]{3}[0-9]{3}$/gm)) {
        course = '';
        errString += "Please enter a valid course!\n";
    }

    if (!prof.match(/^[A-Za-z][A-Za-z'.-]+(\s[A-Za-z][A-Za-z'.-]+)*$/gm)) {
        prof = '';
        errString += "Please check your professor's name again!";
    }

    if (errString != "") {
        alert(errString);
    }

    else {
        alert("Success! Go get that A!");
    }

    storeGoals(name, course, prof, notes);
}

//store basic goals
function storeGoals(name, course, prof, notes) {
    storeInfo.name = name;
    storeInfo.course = course;
    storeInfo.prof = prof;
    storeInfo.notes = notes;

    localStorage.setItem('goals', JSON.stringify(storeInfo));
}