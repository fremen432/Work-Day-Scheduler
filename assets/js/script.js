// Current time in military time
var time = moment().hour();

// 
var displayDate = function() {
    var day = moment().format("[Today is ]dddd MMM Do YYYY");
    $('#currentDay').html(day);
};

var colorCode = function() {
    $("div .hour").each(function(){
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






// function to run when page first loads
$(document).ready(function(){

    // Display the current day in the header
    displayDate();

    // Color code hour sections based on past, present, future
    colorCode();




    // alert(time);


});

