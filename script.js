var currentDay = $("#currentDay");
var day=moment().format('MMMM Do YYYY')
var scheduleText = $('textarea');
var timeBlock = $('.time-block');
var timeNow = moment().format('HH');
console.log(timeNow)



document.addEventListener('DOMContentLoaded', function() {





// Save into local storage
function saveinLocalStorage (key, value) {
localStorage.setItem(key, JSON.stringify(value));
console.log(key, value)
}

$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    
    // Grabs hour of 'this' save button
    var hour =$(this).parent().attr('data-hour')
    console.log(hour)
    var meeting = $(this).siblings('.description').val().trim();
    console.log(meeting);
    saveinLocalStorage(hour, meeting)
    
});


$('#9am .description').val(JSON.parse(localStorage.getItem('9')));
$('#10am .description').val(JSON.parse(localStorage.getItem('10')));
$('#11am .description').val(JSON.parse(localStorage.getItem('11')));
$('#12 .description').val(JSON.parse(localStorage.getItem('12')));
$('#13 .description').val(JSON.parse(localStorage.getItem('13')));
$('#14 .description').val(JSON.parse(localStorage.getItem('14')));
$('#15 .description').val(JSON.parse(localStorage.getItem('15')));
$('#16 .description').val(JSON.parse(localStorage.getItem('16')));
$('#17 .description').val(JSON.parse(localStorage.getItem('17')));
$('#18 .description').val(JSON.parse(localStorage.getItem('18')));

// Change colors of rows based on current time
})


function colorChange(){
    timeBlock.each(function(){
    var thisHour = $(this)

    var timeHour = parseInt(thisHour.attr("data-hour"));
    console.log(timeHour)
    if (timeHour == timeNow) {

        timeBlock.addClass('present');
    } else if (timeHour < timeNow) {
        timeBlock.addClass('past');
    } else if (timeHour> timeNow) {
        timeBlock.addClass('future')
    }
}) 



colorChange()

currentDay.text(day);
}