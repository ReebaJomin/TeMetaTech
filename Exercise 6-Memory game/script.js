const images = [
    'assets/image1.png', 'assets/image1.png',
    'assets/image2.png', 'assets/image2.png',
    'assets/image3.png', 'assets/image3.png',
    'assets/image4.png', 'assets/image4.png',
    'assets/image5.png', 'assets/image5.png',
    'assets/image6.png', 'assets/image6.png',
  ];
  
  let attempts = 0;
  let firstCard = null;
  let secondCard = null;
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function createBoard() {
    const gameBoard = document.getElementById('game-board');
    shuffle(images);
    
    images.forEach(image => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.image = image;
      
      const img = document.createElement('img');
      img.src = image;
      card.appendChild(img);
      
      card.addEventListener('click', flipCard);
      
      gameBoard.appendChild(card);
    });
  }
  
  function flipCard() {
    if (this === firstCard) return;
    
    this.classList.add('flipped');
    
    if (!firstCard) {
      firstCard = this;
      return;
    }
    
    secondCard = this;
    attempts++;
    document.getElementById('attempts').textContent = attempts;
    
    if (firstCard.dataset.image === secondCard.dataset.image) {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      resetBoard();
    } else {
      setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
      }, 1000);
    }
  }
  
  function resetBoard() {
    [firstCard, secondCard] = [null, null];
  }
  
  createBoard();
  