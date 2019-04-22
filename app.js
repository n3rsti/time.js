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

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]
    const shortDays = [
        'Mon.',
        'Tue.',
        'Wed.',
        'Thu.',
        'Fri.',
        'Sat.',
        'Sun.'
    ]
    translatedMonth = months[month - 1];
    translatedDay = days[day - 1];
    shortDay = shortDays[day - 1];
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
    let hmText = document.getElementById('hm');

    fullTime = year + ':' + month + ':' + day + ':' + hour + ':' + minute + ':' + second;
    let dmy = day + '.' + month + '.' + year;
    let dTmy = day + ' ' + translatedMonth + ' ' + year;
    let hm = hour + ':' + minute
    
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
    if(hmText){
        hmText.innerText = hm;
    }

}
setInterval(time, 1000);