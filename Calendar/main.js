let [hours, time] = [
    23-6,
    document.querySelector('#time')
];

const setTime = () => {
    setMinutes();

    let hourDiv = document.querySelector('.hour');

    while (document.querySelectorAll('.hour').length < hours) {
        time.appendChild(hourDiv.cloneNode(true));
    }

    setHours();
}

const setMinutes = () => {
    let minutes = document.querySelectorAll('.minute');

    for (let i=1; i<minutes.length; i++) {
        let minute = minutes[i];
        minute.innerHTML = parseInt(minutes[i-1].innerHTML)+5;
    }
}

const setHours = () => {
    let hourDivs = document.querySelectorAll('[data-hour]');

    for (let i=0; i<hours; i++) {
        hourDivs[i].dataset.hour = parseInt(hourDivs[i].dataset.hour) + i;
        hourDivs[i].innerHTML = hourDivs[i].dataset.hour;
    }
}

/* VERTICAL NAVBAR */
const setNav = () => {
    let [month, navList, day, days] = [
        document.querySelector('#month'),
        document.querySelector('ul'),
        document.querySelector('[data-day]'),
        document.querySelectorAll('[data-day]')
    ];
    
    let dayNum = parseInt(day.dataset.day);
    
    day.innerHTML = dayNum;
    month.innerHTML = month.dataset.monthFirst;
    
    while (dayNum !== 9) {
        navList.appendChild(document.querySelector('[data-day]').cloneNode(true));
        dayNum = dayNum === 30 ? 1 : dayNum+1;
    }
}

const setDays = () => {
    let days = document.querySelectorAll('[data-day]');

    for (let i=0; i<days.length; i++) {
        days[i].dataset.day = parseInt(days[i].dataset.day) + i;
        days[i].innerHTML = days[i].dataset.day;
    }
}

setTime();
setNav();