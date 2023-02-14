const btn = document.querySelector('.btn');
const share = document.querySelector('.share');

btn.addEventListener('click', function() {
  share.classList.toggle('icon');
  btn.classList.toggle('btn-active');
});

window.addEventListener('click', function(event) {
  if (!event.target.closest('.btn')) {
    share.classList.remove('icon');
    btn.classList.remove('btn-active');
  }
});
