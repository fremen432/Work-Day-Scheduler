var test = function(){
    console.log("Test function is working");
    // alert("This function is working");
};

// --------------------------------------------------------

// Current time in military time
var time = moment().hour();

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

    var userInput = $(this).siblings("textarea").val().trim();
    var hourSpan = $(this).siblings(".hour").text().trim();
    saveData(userInput, hourSpan)


    alert("save-btn function works");
};

var resetBtn = function(){

    alert("reset-btn function works");

    localStorage.clear();
    location.reload();

};


// function to run when page first loads
$(document).ready(function(){

    // save and reset button .on('click') event listeners
    $('#save-btn').on('click', saveBtn);
    $('#reset-btn').on('click', resetBtn);


    displayDate();
    colorCode();



    test();
});

