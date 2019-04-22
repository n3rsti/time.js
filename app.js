function time() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let translatedMonth;
    let translatedDay;
    let shortDay;
    let fullTime;

    switch (month) {
        case 0:
            translatedMonth = 'January';
            break;
        case 1:
            translatedMonth = 'February';
            break;
        case 2:
            translatedMonth = 'March';
            break;
        case 3:
            translatedMonth = 'April';
            break;
        case 4:
            translatedMonth = 'May';
            break;
        case 5:
            translatedMonth = 'June';
            break;
        case 6:
            translatedMonth = 'July';
            break;
        case 7:
            translatedMonth = 'August';
            break;
        case 8:
            translatedMonth = 'September';
            break;
        case 9:
            translatedMonth = 'October';
            break;
        case 10:
            translatedMonth = 'November';
            break;
        case 11:
            translatedMonth = 'December';
            break;

    }
    switch (day) {
        case 1:
            translatedDay = 'Monday';
            break;
        case 2:
            translatedDay = 'Tuesday';
            break;
        case 3:
            translatedDay = 'Wednesday';
            break;
        case 4:
            translatedDay = 'Thursday';
            break;
        case 5:
            translatedDay = 'Friday';
            break;
        case 6:
            translatedDay = 'Saturday';
            break;
        case 7:
            translatedDay = 'Sunday';
    }
    switch (day) {
        case 1:
            shortDay = 'Mon.';
            break;
        case 2:
            shortDay = 'Tue.';
            break;
        case 3:
            shortDay = 'Wed.';
            break;
        case 4:
            shortDay = 'Thu.';
            break;
        case 5:
            shortDay = 'Fri.';
            break;
        case 6:
            shortDay = 'Sat.';
            break;
        case 7:
            shortDay = 'Sun.';
    }
    let yearText = document.getElementById('year');
    let monthText = document.getElementById('month');
    let dayText = document.getElementById('day');
    let hourText = document.getElementById('hour');
    let minuteText = document.getElementById('minute');
    let secondText = document.getElementById('second');
    let translatedMonthText = document.getElementById('translated-month');
    let translatedDayText = document.getElementById('translated-day');
    let shortDayText = document.getElementById('short-day');
    let fullTimeText = document.getElementById('full-time');
    let dmyText = document.getElementById('dmy');
    let dTmyText = document.getElementById('dtmy');

    fullTime = year + ':' + month + ':' + day + ':' + hour + ':' + minute + ':' + second;
    let dmy = day + '.' + month + '.' + year;
    let dTmy = day + ' ' + translatedMonth + ' ' + year;
    
    if(yearText){
        yearText.innerText = year;
    }
    if(monthText){
        monthText.innerText = month;
    }
    if(dayText){
        dayText.innerText = day;
    }
    if(hourText){
        hourText.innerText = hour;
    }
    if(minuteText){
        minuteText.innerText = minute;
    }
    if(secondText){
        secondText.innerText = second;
    }
    if(translatedDayText){
        translatedDayText.innerText = translatedDay;
    }
    if(translatedMonthText){
        translatedMonthText.innerText = translatedMonth;
    }
    if(shortDayText){
        shortDayText.innerText = shortDay;
    }
    if(fullTimeText){
        fullTimeText.innerText = fullTime;
    }
    if(dmyText){
        dmyText.innerText = dmy;
    }
    if(dTmyText){
        dTmyText.innerText = dTmy;
    }

}
setInterval(time, 1000);