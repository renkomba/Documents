let [hour, hours, time] = [
    document.querySelector('.hour'),
    23-6,
    document.querySelector('#time')
];

const setTime = () => {
    setMinutes();

    while (document.querySelectorAll('.hour').length < hours) {
        time.appendChild(hour.cloneNode(true));
    }

    setHours();
}

const setMinutes = () => {
    let minutes = document.querySelectorAll('.minute');
    debugger;

    for (let i=1; i<minutes.length; i++) {
        let minute = minutes[i];
        minute.innerHTML = (minutes[i-1].innerHTML/1)+5;
    }
}

const setHours = () => {
    let hourDivs = document.querySelectorAll('.hour');

    for (let i=0; i<hours; i++) {
        hourDivs[i].dataset.hour = (hourDivs[i].dataset.hour/1) + i;
        hourDivs[i].innerHTML = hourDivs[i].dataset.hour;
    }
}

setTime();