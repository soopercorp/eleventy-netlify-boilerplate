// Add your inline JS here
window.addEventListener('colorschemechange', (e) => {
	document.body.classList.toggle('dark', e.target.mode === 'dark');
});
