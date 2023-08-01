'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(function(btn){
  btn.addEventListener('click',openModal);
});

/*for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
*/
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



/*const header=document.querySelector('.header');
const mssg=document.createElement('div');
mssg.classList.add('cookie-message');

mssg.innerHTML='we use cookies for improved functionality and anlaytics.<button class="btn btn--close-cookie">Got it!</button>';
header.append(mssg);

const cok=document.querySelector('.btn--close-cookie');
cok.addEventListener('click',function(){
  mssg.remove();
});

//style
mssg.style.backgroundColor='#37383d';
mssg.style.width='128%';
mssg.style.height=Number.parseFloat(getComputedStyle(mssg).
height,10)+30+'px';

//document.documentElement.style.setProperty('--color-primary','orangered');
*/

const btnsc=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');

btnsc.addEventListener('click',function(){
  const s1cords=section1.getBoundingClientRect();

  //scrolling
 /* window.scrollTo({
    left:s1cords.left+window.pageXOffset
    ,top:s1cords.top+window.pageYOffset,
    behavior:'smooth'
  });*/

  section1.scrollIntoView({behavior:'smooth'});
})