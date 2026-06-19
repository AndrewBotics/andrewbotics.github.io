const body = document.body;
const buttonProf = document.getElementById('prof-btn-home');
const buttonWhimsy = document.getElementById('whimsy-btn-home');
const buttonsBack = document.querySelectorAll('.back-button');

buttonProf.addEventListener('click', () => {
    body.className = 'show-professional';
});

buttonWhimsy.addEventListener('click', () => {
    body.className = 'show-whimsy';
});

buttonsBack.forEach(button => {
    button.addEventListener('click', () => {
        body.className = '';
    });
});