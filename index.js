const cardsContainer = document.getElementById('cardsContainer');
const numberInput = document.getElementById('numberInput');
const flagInput = document.getElementById('flagInput');
const dateInput = document.getElementById('dateInput');
const infoTextarea = document.getElementById('infoTextarea');
const addButton = document.getElementById('addButton');


let cards = JSON.parse(localStorage.getItem('cards')) || [];


function addCard() {
  const card = {
    number: numberInput.value,
    flag: flagInput.value,
    date: dateInput.value,
    info: infoTextarea.value
  };

  cards.push(card);
  
  
  localStorage.setItem('cards', JSON.stringify(cards));

  displayCards();
}


function displayCards() {
  cardsContainer.innerHTML = '';

  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.innerHTML = ` 
    <p><strong>Номер:</strong> ${card.number}</p>
    <p><strong>Флаг:</strong> ${card.flag}</p>
    <p><strong>Дата:</strong> ${card.date}</p>
    <p><strong>Информация:</strong> ${card.info}</p>`
   
     
    
    cardsContainer.appendChild(cardElement);
  });
}


let cardContainer = document.getElementById("cardContainer");
let cardIndex = 1;

function addCard() {
    let newCard = document.createElement("div");
    newCard.classList.add("card");
    newCard.textContent = "Карточка " + cardIndex;
    cardContainer.appendChild(newCard);
    
    cardIndex++;
}


function deleteCard(index) {
  cards.splice(index, 1);
     
  
  
  localStorage.setItem('cards', JSON.stringify(cards));

  displayCards();
}

addButton.addEventListener('click', addCard);

displayCards();