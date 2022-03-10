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
    debugger;
    let hourDivs = [...document.querySelectorAll('[data-hour]')];

    for (let i=0; i<hours; i++) {
        hourDivs[i].dataset.hour = parseInt(hourDivs[i].dataset.hour) + i;
        hourDivs[i].innerHTML = hourDivs[i].dataset.hour;
    }
}

setTime();