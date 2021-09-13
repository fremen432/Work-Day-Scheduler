var test = function(){
    console.log("Test function is working");
    // alert("This function is working");
};

// --------------------------------------------------------

// Current time in military time
var time = moment().hour();

// Save data object to local storage 
var saveData = function(note, hour){
    var userData = JSON.parse(localStorage.getItem("task")) || []

    if (note !== ""){
        objSave = {
            note: note,
            hour: hour
        }
        userData.push(objSave);
        window.localStorage.setItem("task", JSON.stringify(userData))
    }
};

var loadData = function(){
    var tasks = JSON.parse(localStorage.getItem("schedule"));

    //looping over each object in the list
    $.each(tasks, function(list, arr){
        displaySavedTask(arr.task, arr.hour);
    })
};

var displaySavedTask = function(task, hour){
    var task = task;
    $(".hour").each(function(){
        if($(this).text() === hour){
            $(this).siblings("textarea").text(task);
        } else {
            $(this).siblings("textarea").text();
        }
    })
};







// var loadData = function(){
//     var tasks = JSON.parse(localStorage.getItem("schedule"));

//     $.each(tasks, function(list, arr){
//         displaySavedTask(arr.note, arr.hour);
//     })
// };

// var displaySavedTask = function(note, hour){
//     var note = note;
//     $(".hour").each(function(){
//         if($(this).text() === hour){
//             $(this).siblings("textarea").text(note);
//         } else {
//             $(this).siblings("textarea").text();
//         }
//     })
// };

// Display the current day in the header
var displayDate = function() {
    var day = moment().format("[Today is ]dddd MMM Do YYYY");
    $('#currentDay').html(day);
};

// Color code hour sections based on past, present, future
var colorCode = function() {
    $(".hour").each(function(){
        var hourSection = parseInt($(this).attr("id"));

        if (time > hourSection){
            $(this).siblings("textarea").addClass("past");
        } 

        else if (time < hourSection){
            $(this).siblings("textarea").addClass("future");
        } 

        else {
            $(this).siblings("textarea").addClass("present");
        }

    });
};

var saveBtn = function(){
    // alert("save-btn function works");
    var valNote = $(this).siblings("textarea").val().trim();
    var valHour = $(this).siblings(".hour").text().trim();
    saveData(valNote, valHour)
};

var resetBtn = function(){
    // alert("reset-btn function works");
    localStorage.clear();
    location.reload();
};

// function to run when page first loads
$(document).ready(function(){
    displayDate();

    loadData();



    colorCode();

    // save and reset button .on('click') event listeners
    $('.saveBtn').on('click', saveBtn);
    $('#reset-btn').on('click', resetBtn);


    // test();
});

