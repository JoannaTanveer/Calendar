var currentDay = $('#currentDay');
var scheduleText = $('textarea');
var timeBlock = $('.time-block');
var timeNow = moment().format('H');
var todoList = [];

//Get items to save into local storage

// function scheduleObjectsFn () {
//     // For each row of time, get data-hour and name it as that
//     timeBlock.each(function (){ 
//     var thisTimeBlock = $(this);
//     var thisHourRow = parse(thisTimeBlock.attr('data-hour'));

    // For each scheduled thing put in text area add to an object with time being par tof the key value pair
    var scheduleObject = {
        hour: thisHourRow,
        text: '',
    }

    // Push this object into another bucket, this is the todoList
    todoList.push(scheduleObject);
// });

// Save into local storage
function storeMeetings () {
localStorage.setItem('todoList', JSON.stringify(todoList));
console.log(todoList)
}

$(???).on('click', function(event) {
    event.preventDefault();
    
    // Grabs input from textarea
    
    
    var meeting = $ (timeBlock).val().trim();
    // Adding the meeting from textarea to our array 

    if (meeting=== '') {
        return;
    }

    todoList.push(scheduleObject);

    i need to render something somewhere
});


// Change colors of rows based on current time

function colorChange(){

    if (thisHourRow == timeNow) {

        timeBlock.addClass('present');
    } else if (thisHourRow < timeNow) {
        timeBlock.addClass('past');
    } else if (thisHourRow > timeNow) {
        timeBlock.addClass('future')
    }






}































currentDay.innerHTML = moment().format('MMMM Do YYYY');


