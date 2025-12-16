const boxes = document.querySelectorAll('.box-to-observe-top, .box-to-observe-bottom');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); 
    } else {
      entry.target.classList.remove('active');
    }
  });
}, {
  root: null,
  rootMargin: "0px 0px 20px 0px",
  threshold: 0
});

boxes.forEach(box => observer.observe(box));


  function toggleTheme() {
    const html = document.documentElement;
    const btn = document.getElementById('themeToggle');

    const isDark = html.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    btn.setAttribute('aria-pressed', !isDark);
    btn.textContent = isDark ? ' Dark Mode' : 'Light Mode';
  }