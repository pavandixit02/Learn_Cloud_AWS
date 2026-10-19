
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.top-nav');
  if (toggle && nav) toggle.addEventListener('click', function () {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  const input = document.getElementById('topic-search');
  const cards = Array.from(document.querySelectorAll('.topic-card'));
  const empty = document.getElementById('empty-state');
  if (input && cards.length && empty) input.addEventListener('input', function () {
    const q = input.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(function (card) {
      const match = (card.dataset.search || card.innerText).toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    empty.style.display = shown ? 'none' : 'block';
  });
});
