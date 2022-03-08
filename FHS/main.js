/* BUTTONS */
const buttonLabels = [
    'Meeting Info',
    'About Dues',
    'Schoology Group',
    'French 2 Wordle'
];
const buttonContainer = document.querySelector('#buttons');
const buttons = buttonContainer.children;

// Cycle through blank buttons & label each using [buttonLabels]
const labelButtons = () => {
    for (let i=0; i<buttons.length; i++) {
        buttons[i].innerHTML = buttonLabels[i];
    }
}

/* TOOLTIPS */
const newWords = [...document.querySelectorAll('.new-word')];
const oppositeBool = {
    'true': 'false',
    'false': 'true'
}
const tooltipDict = {
    'à droite': ['on the right', '⇨'],
    'alias': ['aka', ' / '],
    'Apportez': ['bring', 'Venez avec'],
    'l\'aprèm': ['the afternoon', 'l\'après-midi'],
    'Bon courage': ['Good luck', 'Merde'],
    '« Chapeau »': ['Congrats', 'Félicitations'],
    'cotisation': ['dues', 'paiement pour être membre'],
    'croise les doigts': ['fingers crossed', '🤞🤞'],
    'D\'abord': ['First of all', '1) '],
    'Ensuite': ['And then', '2) '],
    'fêter': ['to celebrate', 'célébrer'],
    'la galette': ['cake', 'le gâteau'],
    'gens': ['people', 'personnes'],
    'un goûter': ['a snack', 'un snack'],
    '« Huuuuuu »': ['"Boooooo"', '« Boooouh »'],
    'Il y aura': ['There will be', 'Vous allez voir'],
    'le lien': ['link', '« groupes »'],
    'des lumières': ['of enlightenment', 'du savoir'],
    'mater': ['to watch', 'regarder'],
    'dans le Préfabriqué': ['in Trailer', 'dans la salle de classe dans le parking'],
    'Premières': ['Juniors', 'élèves en 11e année'],
    'Puis': ['Then', '3) '],
    'Secondes': ['Sophomores', 'élèves en 10e année'],
    'suivant': ['following', '⇨'],
    'Terminales': ['Seniors', 'élèves en 12e année']
};
// '': ['', ''],

// Not accessible because assistive techs cannot read data attributes
// for each .new-word, set its translation, simplification, and toggle
const labelTooltips = () => {
    for (let word of newWords) {
        let text = word.textContent;
        console.log(text);

        word.setAttribute('data-tooltip', tooltipDict[text][0]);
        word.setAttribute('data-simpler-word', tooltipDict[text][1]);
        word.setAttribute('data-original-word', text);
        word.setAttribute('data-is-original', true);
    }
}

const activateTooltips = () => {
    for (let word of newWords) {
        word.addEventListener('click', () => {
            let isOriginal = word.dataset.isOriginal;

            word.dataset.isOriginal = oppositeBool[isOriginal];

            word.innerHTML = isOriginal === 'true' ?
                word.dataset.simplerWord : word.dataset.originalWord;
        });
    }
}

/* DISPLAY */
const copyButton = document.querySelector('#copy');

// copy #code innerHTML to clipboard when you click on var copyButton
copyButton.addEventListener('click', () => {
    let schoologyCode = document.querySelector('#code').innerHTML;
    
    navigator.clipboard.writeText(schoologyCode)
        .then( () => console.log(`a copié « ${schoologyCode} » !`) )
        .catch( err => console.error(`Couldn't copy. Try again./nERROR: ${err}`) );
});

// if button is clicked, make its data-dest-page to .active
// make prior .active page .hidden
const toggleDisplay = () => {
    buttonContainer.addEventListener('click', e => {
        debugger;
        console.log(e.target);
        
        let [buttonIn, buttonOut] = [
            e.target,
            document.querySelector('.active')
        ];
        let [pageIdIn, pageIdOut] = [
            buttonIn.dataset.destPage,
            buttonOut.dataset.destPage
        ];
        let [pageIn, pageOut] = [
            document.querySelector(pageIdIn),
            document.querySelector(pageIdOut)
        ];
        let [buttons, pages] = [
            [buttonIn, buttonOut],
            [pageIn, pageOut]
        ];

        for (let i=0; i<2; i++) {
            buttons[i].classList.toggle('active');
            pages[i].classList.toggle('hidden');
        }
    });
}

/* RUN FUNCTIONS */
labelButtons();
labelTooltips();
toggleDisplay();
activateTooltips();