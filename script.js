const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const clock= setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours(),sc = dateToday.getSeconds(),mn = dateToday.getMinutes()
    if (hr < 10) hr = "0"+hr
    if (mn < 10) mn = "0"+mn
    if (sc < 10) sc = "0"+sc
    hours.textContent = hr;
    minutes.textContent = mn;
    seconds.textContent = sc
})