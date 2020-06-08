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
})()