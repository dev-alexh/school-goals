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
    if (removed) {
        let name = document.getElementById("name").value;
        let course = document.getElementById("course").value;
        let prof = document.getElementById("prof").value;
        let notes = document.getElementById("notes").value;

        if (!name.match(/^[A-Za-z][A-Za-z'.-]+(\s[A-Za-z][A-Za-z'.-]+)*$/gm)) {
            alert("Please check your name again!");
            return;
        }

        if (!course.match(/^[A-Z]{3}[0-9]{3}$/gm)) {
            alert("Please enter a valid course!");
            return;
        }

        if (!prof.match(/^[A-Za-z][A-Za-z'.-]+(\s[A-Za-z][A-Za-z'.-]+)*$/gm)) {
            alert("Please check your professor's name again!");
            return;
        }

        storeBasicGoals(name, course, prof, notes);
    }

    else {
        let name = document.getElementById("name").value;
        let course = document.getElementById("course").value;
        let textbook = document.getElementById("textbook").value;
        let page = document.getElementById("page").value;
        let prof = document.getElementById("prof").value;
        let notes = document.getElementById("notes").value;

        if (!name.match(/^[A-Za-z][A-Za-z'.-]+(\s[A-Za-z][A-Za-z'.-]+)*$/gm)) {
            alert("Please check your name again!");
            return;
        }

        if (!course.match(/^[A-Z]{3}[0-9]{3}$/gm)) {
            alert("Please enter a valid course!");
            return;
        }

        if (!prof.match(/^[A-Za-z][A-Za-z'.-]+(\s[A-Za-z][A-Za-z'.-]+)*$/gm)) {
            alert("Please check your professor's name again!");
            return;
        }

        storeFullGoals(name, course, textbook, page, prof, notes);
    }
}

//store basic goals
function storeBasicGoals(name, course, prof, notes) {
    storeInfo.name = name;
    storeInfo.course = course;
    storeInfo.prof = prof;
    storeInfo.notes = notes;

    localStorage.setItem('goals', JSON.stringify(storeInfo));
    alert("Success!");
}

//store full goals
function storeFullGoals(name, course, textbook, page, prof, notes) {
    storeInfo.name = name;
    storeInfo.course = course;
    storeInfo.textbook = textbook;
    storeInfo.page = page;
    storeInfo.prof = prof;
    storeInfo.notes = notes;

    localStorage.setItem('goals', JSON.stringify(storeInfo));
    alert("Success!");
}