// main slider

const wrapper = document.querySelector('.slider__wrapper');
const innerWrapper = document.querySelector('.slider__inner-wrapper');
const pagination = document.querySelector('.slider__buttons');
const nextSlide = document.querySelector('.arrow--right');
const previousSlide = document.querySelector('.arrow--left');
const slides = document.querySelectorAll('.slider__slide');

let shareWidth = +getComputedStyle(wrapper).width.split('px')[0];
let sliderCount = innerWrapper.childElementCount - 1;

let activeSlide = 0; 
let TimderID;

function setWidth () {
  for (let slide of slides) {
    slide.style.width = `${shareWidth}px`;
  }
};

setWidth();

function sliderButtons() {
  for (let button of slides) {
    button = document.createElement('button');
    button.classList.add('slider__button');
    if (button === activeSlide) {
      button.classList.add('slider__button--active');
    }
    pagination.insertAdjacentElement('beforeend', button);
  }
};

sliderButtons();

function setActiveSlide(index) {
  if (index === 0) {
    previousSlide.setAttribute('disabled', 'disabled');
  }
  if (index === sliderCount) {
    nextSlide.setAttribute('disabled', 'disabled');
  }

  innerWrapper.style.marginLeft = `-${shareWidth * index}px`;
  activeSlide = index;
};



nextSlide.addEventListener('click', function () {
  setActiveSlide(activeSlide + 1);
})

previousSlide.addEventListener('click', function () {
  setActiveSlide(activeSlide - 1);
})