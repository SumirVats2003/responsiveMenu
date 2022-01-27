const btn = document.getElementsByClassName('menu')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

btn.addEventListener('click', () => {
	navLinks.classList.toggle('active');
})