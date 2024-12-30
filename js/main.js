// alert('main');

// prelevo il container dal DOM
const calendarContainer = document.querySelector('.container');
// console.log(calendarContainer);

// recupera lo stato delle card aperte dal localStorage
let openedCards = JSON.parse(localStorage.getItem('openedCards')) || [];

// funzione per salvare lo stato nel localStorage
function saveOpenedCards() {
    localStorage.setItem('openedCards', JSON.stringify(openedCards));
}

// aggiorna lo stato delle card aperte al caricamento della pagina
function updateOpenedCards() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        if (openedCards.includes(card.dataset.id)) {
            card.classList.add('open'); // aggiunge la classe 'open' per lo stile
            card.removeEventListener('click', handleCardClick); // rimuove il listener per evitare clic
        }
    });
}

// gestisce il click sulla card
function handleCardClick(event) {
    const card = event.currentTarget;
    const cardId = card.dataset.id;

    // cambia lo stile e salva lo stato
    card.classList.add('open');
    if (!openedCards.includes(cardId)) {
        openedCards.push(cardId);
        saveOpenedCards(); // salva nel localStorage
    }
}

// genero dinamicamente le card da stampare in pagina
source.forEach((curElem, index) => {

    // creo l'elemento div contenitore della card
    const card = document.createElement('div');
    card.classList.add('card'); // aggiungo all'elemento div la classe card
    card.dataset.id = index + 1; // aggiungo un idenficiatore unico per ogni card

    // creo span dove inserire l'icona
    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.textContent = emojiMap[curElem.icon];

    // creo un altro span dove inserire il numero 
    const number = document.createElement('span');
    number.classList.add('number');
    number.textContent = index + 1;

    // se è la card del 25, aggiungi la classe 'special'
    if (index + 1 === 25) {
        card.classList.add('special');
    }

    // inserisco gli elementi che compongono la card nel DOM
    card.append(icon, number);

    // aggiungi l'evento click per gestire lo stato delle card
    card.addEventListener('click', handleCardClick);

    // stampo la card in pagina
    calendarContainer.append(card);

    // Modale

    // prelevo gli elementi del modale
    const modal = document.querySelector('.modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModalBtn = document.querySelector('.close-btn');
    const overlay = document.querySelector('.overlay');

    card.addEventListener("click", () => {
        const cardId = card.dataset.id;
        // console.log(cardId);
        const cardData = source[cardId - 1];
        // console.log(cardData);

        // inserisco il contenuto nel modale
        modalBody.innerHTML = ""; // mi assicuro che il modale sia vuoto ad ogni apertura

        if (cardData.type === "text") {
            const text = document.createElement('p');
            text.textContent = cardData.text;
            modalBody.append(text);
        } else {
            const img = document.createElement('img');
            img.src = cardData.url;
            modalBody.append(img);
        }

        // mostra il modale
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');

        // chiusura del modale quando aperto
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        });

        overlay.addEventListener('click', () => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        });

    });

});

// aggiorna le card già aperte
updateOpenedCards();





