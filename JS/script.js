const menuMobile = document.querySelector("#menu-mobile");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-Links");
const classAtivo = "ativo";
const animar = () => {
	navLinks.forEach((element, index) => {
		if (element.style.animation) {
			element.style.animation = "";
		} else {
			element.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 0.3}s`;
		}
	});
};
const verificarMenuMobile = () => {
	if (menuMobile) {
		menuMobile.addEventListener("click", () => {
			navList.classList.toggle("ativo");
            menuMobile.classList.toggle("ativo");
			animar();
		});
	}
};

verificarMenuMobile();
