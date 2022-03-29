// moments js date and time

// time + time update
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format("h:mm:ss a"));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

// language
moment.locale('ar')

// day and date
var day = moment().format('dddd');
var date = moment().format('LL');

document.getElementById("date").innerHTML = day + " " + date;

// newprice date
var new_price = moment("20210611", "YYYYMMDD").fromNow();

document.getElementById("new_price").innerHTML = new_price;
