// alert('main');

// prelevo il container dal DOM
const calendarContainer = document.querySelector('.container');
// console.log(calendarContainer);

// genero dinamicamente le card da stampare in pagina
source.forEach((curElem, index)=> {

     //creo l'elemento div contenitore della card
    const card = document.createElement('div');
    card.classList.add('card'); //aggiungo all'elemento div la classe card
    card.dataset.id = index + 1; //aggiungo un idenficiatore unico per ogni card

    // creo span dove inserire l'icona
    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.textContent = emojiMap[curElem.icon];

    // creo un altro span dove inserire il numero 
    const number = document.createElement('span');
    number.classList.add('number');
    number.textContent = index + 1;

    // inserisco gli elementi che compongono la card nel DOM
    card.appendChild(icon);
    card.appendChild(number);

    // stampo la card in pagina
    calendarContainer.appendChild(card);
});





