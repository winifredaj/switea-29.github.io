let container = document.getElementById('container');
let button = document.getElementById('button');
let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let Switch = document.getElementById('switch');
let toggler = document.getElementById('toggler');
let button2 = document.getElementById('button-two');
let video = document.querySelector('video');
// let canvas = document.getElementById('my-canvas');
let isFrontShowing = false;
let darkMode = false;

function confetti_start(size, can_rotate) {
  let confettiSettings = {
    target: 'my-canvas',
    size: size,
    rotate: can_rotate,
  };
  let confetti = new ConfettiGenerator(confettiSettings);
  confetti.render(); // will create the confetti
}
confetti_start(3, false);

button.addEventListener('click', () => {
  confetti_start(5, true); // when button is clicked, we want it to change the confetti settings
  if (!isFrontShowing) {
    card1.classList.add('inactive');
    card1.classList.remove('active');
    card2.classList.remove('inactive');
    card2.classList.add('active');
    container.classList.remove('inactive');
    container.classList.add('active');

    isFrontShowing = true;
  } else if (isFrontShowing) {
    card1.classList.remove('active');
    card1.classList.add('inactive');
    card2.classList.remove('active');
    card2.classList.add('inactive');

    isFrontShowing = false;
  }
});

Switch.addEventListener('click', () => {
  if (!darkMode) {
    Switch.classList.remove('inactive');
    Switch.classList.add('active');

    toggler.classList.remove('inactive');
    toggler.classList.add('active');

    container.classList.add('dark');

    document.body.classList.remove('inactive');
    document.body.classList.add('active');

    darkMode = true;
  } else {
    Switch.classList.remove('active');
    Switch.classList.add('inactive');

    toggler.classList.remove('active');
    toggler.classList.add('inactive');

    container.classList.remove('dark');

    document.body.classList.remove('active');
    document.body.classList.add('inactive');

    darkMode = false;
  }
});

button2.addEventListener('click', () => {
  video.classList.remove('hidden');
  video.play();
  card1.classList.add('hidden');
  card2.classList.add('hidden');
  container.classList.remove('active');
  container.classList.add('inactive');
});
