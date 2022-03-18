/* -----BANNER----- */
let staffView = document.querySelector('#staff-view');
let staff = staffView.querySelector('select');
let calStrip = document.querySelector('#cal-strip');
let rows = calStrip.querySelector('tbody').children;

// if the selected <option> changes do one of two things:
// remove " de " from <label> if staff.value === general
// else, add " de "
const changeLabel = () => {
    let selectedStaff = staff.value;
    let label = staffView.querySelector('label');
    let text = label.dataset.ogLabel;

    label.innerHTML = selectedStaff === 'general' ? text : `${text} de `;
}

const fillCalStrip = () => {
    debugger;
    let tbody = calStrip.querySelector('tbody');
    let rows = tbody.children;
    let templateRow = rows[0].cloneNode(true);

    while (rows.length < 3) tbody.appendChild(templateRow);

    for (let i=1; i<3; i++) {
        let row = rows[i];
        for (let datum of row) {
            let a = datum.children[0];
            a.innerHTML = parseInt(a.innerHTML) + (7 * i);
        }
    }
}


/* -----TIME----- */
let [hours, time] = [
    23-6,
    document.querySelector('#time')
];

// First set minutes, then for each hour until 22, duplicate
// the .hour <div>. And then set the hour nums/data attributes
const setTime = () => {
    setMinutes();
    
    let hourDiv = document.querySelector('.hour');
    
    while (document.querySelectorAll('.hour').length < hours) {
        time.appendChild(hourDiv.cloneNode(true));
    }
    
    setHours();
}

// for each .minute, set its innerHTML to the proper num
const setMinutes = () => {
    let minutes = document.querySelectorAll('.minute');
    
    for (let i=1; i<minutes.length; i++) {
        let minute = minutes[i];
        minute.innerHTML = parseInt(minutes[i-1].innerHTML)+5;
    }
}

// for each .hour, set the data attribute equal the hour num
// then set the innerHTML equal to the data attribute
const setHours = () => {
    let hourDivs = document.querySelectorAll('[data-hour]');
    
    for (let i=0; i<hours; i++) {
        hourDivs[i].dataset.hour = parseInt(hourDivs[i].dataset.hour) + i;
        hourDivs[i].innerHTML = hourDivs[i].dataset.hour;
    }
}

/* VERTICAL NAVBAR */
// const setNav = () => {
    //     let [month, navList, day, days] = [
        //         document.querySelector('#month'),
        //         document.querySelector('ul'),
        //         document.querySelector('[data-day]'),
        //         document.querySelectorAll('[data-day]')
        //     ];
        
        //     let dayNum = parseInt(day.dataset.day);
        
        //     day.innerHTML = dayNum;
        //     month.innerHTML = month.dataset.monthFirst;
        
        //     while (dayNum !== 9) {
            //         navList.appendChild(document.querySelector('[data-day]').cloneNode(true));
            //         dayNum = dayNum === 30 ? 1 : dayNum+1;
            //     }
            // }
            
            // const setDays = () => {
                //     let days = document.querySelectorAll('[data-day]');
                
                //     for (let i=0; i<days.length; i++) {
                    //         days[i].dataset.day = parseInt(days[i].dataset.day) + i;
                    //         days[i].innerHTML = days[i].dataset.day;
                    //     }
                    // }
                    
/* -----FUNCTIONS----- */
document.addEventListener('change', changeLabel);
setTime();
fillCalStrip();
// setNav();