let choises = ["papir", "kamen", "makaze"];
const choiseBtns = document.querySelectorAll('.choiseBtns');
const popednik = document.querySelector('#popednik');
const playerChoiseText = document.querySelector('#playerChoiseText');
const pcChoiseText = document.querySelector('#pcChoiseText');
const winRoundsText = document.querySelector('#winRoundsText');
const lostRoundsText = document.querySelector('#lostRoundsText');


let playerScore = 0;
let pcScore = 0;

choiseBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        let playerChoise = event.target.value;
        let randomId = Math.floor(Math.random() * 3)
        let pcChoise = choises[randomId];
        let rezultat = '';

        if(playerChoise === pcChoise) {
            rezultat = 'IZJEDNACENO'
        } else {
            switch(playerChoise) {
                case 'papir':
                    if(pcChoise === 'kamen'){
                        rezultat = 'POBEDIO SI'
                    } else {
                        rezultat = 'IZGUBIO SI'
                    }
                break

                case 'kamen':
                    if(pcChoise === 'makaze'){
                        rezultat = 'POBEDIO SI'
                    } else {
                        rezultat = 'IZGUBIO SI'
                    }
                break

                case 'makaze':
                    if(pcChoise === 'papir'){
                        rezultat = 'POBEDIO SI'
                    } else {
                        rezultat = 'IZGUBIO SI'
                    }
                break
            }
        }
        popednik.innerHTML = `REZULTAT: <a id="rez">${rezultat}</a>`;
        const rezultatID = document.querySelector('#rez');
        if(rezultat === 'POBEDIO SI'){
            playerScore++;
            rezultatID.classList.toggle('greenTxt')

        } else if(rezultat === 'IZGUBIO SI'){
            pcScore++;
            rezultatID.classList.toggle('redTxt')
            
        }

        winRoundsText.innerText = `Pobedjene runde: ${playerScore}`
        lostRoundsText.innerText = `Izgubljene runde: ${pcScore}`;
        playerChoiseText.innerText = `Tvoj odabir: ${playerChoise}`;
        pcChoiseText.innerText = `Kompov odabir: ${pcChoise}`


    })
})

let lupam = Math.round(Math.random() * 5)
console.log(lupam)