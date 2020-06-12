var signIn = 'sign-in';
var register = 'register';
var sendMessage = 'message';

function modalWindow(blockName, formNumber) {
  var blockName;
  var formNumber;
  const openButton = document.querySelector(`.${blockName}--js`);
  const modalForm = document.querySelector(`.modal-window__${blockName}--js`);
  const formClose = document.querySelectorAll('.modal-window__close--js')[`${formNumber}`];
  const input = document.querySelector(`.${blockName}__input`);
  const body = document.querySelector('body');
  
  openButton.addEventListener('click', function () {
    modalForm.classList.remove('modal-window--hidden');
    input.focus();
    body.style.overflowY = 'hidden';
  });

  formClose.addEventListener('click', function () {
    modalForm.classList.add('modal-window--hidden');
    openButton.focus();
    body.style.overflowY = 'scroll';
  });

  window.addEventListener('keydown', function (event) {
    if (!modalForm.classList.contains('modal-window--hidden') && event.code === 'Escape') {
      modalForm.classList.add('modal-window--hidden');
      openButton.focus();
    }
  });
}

modalWindow(signIn, 0);
modalWindow(register, 1);
modalWindow(sendMessage, 2);

(function () {
  const toTop = document.querySelector('.arrow--top_js')

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 900) {
      toTop.classList.add('arrow--top--active');
    } else {
      toTop.classList.remove('arrow--top--active');
    }
  })

  toTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
})();

