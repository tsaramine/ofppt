document.querySelector(".btn-menu").addEventListener("click", function () {
    const menu = document.querySelector(".menu");

    this.classList.toggle("active");
    menu.classList.toggle("active");
  });
  

  let timerElement = document.getElementById('timer'); // Assuming you have an element with id "timer"
  let timeLeft = 15;
  
  function startTimer() {
      const timerInterval = setInterval(() => {
          if (timeLeft > 0) {
              timeLeft--;
              timerElement.textContent = `Time: ${timeLeft}s`; // Update timer text
          } else {
              clearInterval(timerInterval); // Stop the timer
              timerElement.textContent = "Time's up!";
              // Add any additional action here, such as moving to the next question
          }
      }, 1000); // Run every 1 second
  }



const answerButtons = document.querySelectorAll('.divqui');

answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        answerButtons.forEach(btn => btn.style.pointerEvents = 'none');
        const isCorrect = button.getAttribute('data-correct') === 'true';
        
        if (isCorrect) {
            button.style.backgroundColor = 'green';
            button.style.color = 'white';
        } else {
            button.style.backgroundColor = 'red';
            button.style.color = 'white';
        }
        answerButtons.forEach(btn => {
            if (btn.getAttribute('data-correct') === 'true') {
                btn.style.backgroundColor = 'green';
                btn.style.color = 'white';
            }
        });
    });
});

  

  document.getElementById('start').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.startbox').style.display = 'none';
    document.querySelector('.rules').style.display = '';
});
document.getElementById('back').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.startbox').style.display = '';
  document.querySelector('.rules').style.display = 'none';
})

document.getElementById('start1').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.rules').style.display = 'none';
  document.getElementById('quition1').style.display = '';
  startTimer();
});

document.getElementById('next1').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('quition1').style.display = 'none';
  document.getElementById('quition2').style.display = '';
  startTimer();
});
document.getElementById('next2').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('quition2').style.display = 'none';
  document.getElementById('quition3').style.display = '';
  startTimer();
});
document.getElementById('next3').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('quition3').style.display = 'none';
  document.getElementById('quition4').style.display = '';
  startTimer();
});


const rootElement = document.documentElement;
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    rootElement.classList.toggle('active');
});


