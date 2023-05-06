const toggleMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);
	if (toggle && nav) {
		toggle.addEventListener("click", () => {
			nav.classList.toggle("show");
		});
	}
};
toggleMenu("nav-open", "nav-menu");
toggleMenu("nav-close", "nav-menu");
