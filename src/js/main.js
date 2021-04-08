document.addEventListener('DOMContentLoaded', () => {
    //  Cards options
    const cardArray = [
        {
            name: 'homer',
            img: 'src/img/homer.png'
        },
        {
            name: 'bart',
            img: 'src/img/bart.png'
        },
        {
            name: 'lisa',
            img: 'src/img/lisa.png'
        },
        {
            name: 'marge',
            img: 'src/img/marge.png'
        },
        {
            name: 'moe',
            img: 'src/img/moe.png'
        },
        {
            name: 'ralph',
            img: 'src/img/ralph.png'
        },
        {
            name: 'homer',
            img: 'src/img/homer.png'
        },
        {
            name: 'bart',
            img: 'src/img/bart.png'
        },
        {
            name: 'lisa',
            img: 'src/img/lisa.png'
        },
        {
            name: 'marge',
            img: 'src/img/marge.png'
        },
        {
            name: 'moe',
            img: 'src/img/moe.png'
        },
        {
            name: 'ralph',
            img: 'src/img/ralph.png'
        }
    ]


    cardArray.sort(() => 0.5 - Math.random());


    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    // Create game board
    function createBoard() {
        for (let index = 0; index < cardArray.length; index++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'src/img/blank.png');
            card.setAttribute('data-id', index);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    // Check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('img', 'src/img/blank.png');
            cards[optionTwoId].setAttribute('img', 'src/img/blank.png');
            console.log('Its the same image');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            console.log('Found Match');
            cards[optionOneId].setAttribute('src', 'src/img/white.png');
            cards[optionTwoId].setAttribute('src', 'src/img/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'src/img/blank.png');
            cards[optionTwoId].setAttribute('src', 'src/img/blank.png');
            console.log('Not Match, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You win';
        }
    }
    

    // Flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()
})