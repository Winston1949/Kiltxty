

function clock() {
    //Save the times in variables
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    var monthNames = ["JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
    //Set the AM or PM time
    if (hours >= 12) {
        meridiem = "PM";
    }
    else {
        meridiem = "AM";
    }
    //convert hours to 12 hour format and put 0 in front
    if (hours > 12) {
        hours = hours - 12;
    }
    else if (hours === 0) {
        hours = 12;
    }
    //Put 0 in front of single digit minutes and seconds
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }
    document.getElementById("clock").innerHTML = (hours + ":" + minutes + " " + meridiem);
    document.getElementById("date").innerHTML = (monthNames[month] + " " + day + " " + year);
}
setInterval('clock()', 0);


function background() {
    // document.body.style.backgroundImage = "url('https://media.giphy.com/media/8YzhcFn8kmsYU/giphy.gif')";
  var body=document.body;
  var a=document.querySelector('a');
  body.classList.toggle("background");
}

$(function() {
        // Here's a var cloud, LOL
        var glicth = setInterval(100),
                string, strlen, randomNumber, glitchstring, slicer, elem, stringslice, glitchslice, chars = ['∏', 'ñ', '∆', '_', 'π', '∑', 'π', '◊', 'Ø', '«', '¥', 'ß'];

        $('.container01, .container02, .container03').mouseover(function(e) {

                // Grab target, content and content length
                var elem = $(e.target);
                string = elem.attr('data-val');
                strlen = parseInt(string.length);

                if (!elem.hasClass('active')) {

                        // Quickly now, do a hit
                        elem.addClass('hit');
                        setTimeout(function() {
                                elem.removeClass('hit');
                        }, 60);

                        // Set interval glitch
                        glitch = setInterval(function() {

                                randomNumber = Math.floor((Math.random() * strlen) + 1);
                                slicer = randomNumber - 1;
                                glitchslice = chars.slice(slicer, randomNumber);
                                stringslice = string.slice(slicer, randomNumber);
                                glitchstring = string.replace(stringslice, glitchslice);

                                // Relpace with glitchy string
                                elem.html(glitchstring);

                                // return to normal string
                                setTimeout(function() {
                                        elem.html(elem.attr('data-val'));
                                }, 100);
                        }, 150);
                }
                // Reset element
        }).mouseout(function(e) {
                clearTimeout(glitch);
                var elem = $(event.target);
                elem.html(elem.attr('data-val'));

        })
});
