// export function onScroll() {
// 	if (typeof window === "undefined") {
// 		return;
// 	}

// 	const sections = document.querySelectorAll(".menu-scroll");
// 	const scrollPos =
// 		window.pageYOffset ||
// 		document.documentElement.scrollTop ||
// 		document.body.scrollTop;

// 	for (let i = 0; i < sections.length; i++) {
// 		const currLink = sections[i];
// 		const val = currLink.getAttribute("href");
// 		const newVal = val.replace("/", "");
// 		const refElement = newVal && document.querySelector(newVal);
// 		const scrollTopMinus = scrollPos + 73;
// 		// console.log(newVal);
// 		if (
// 			refElement &&
// 			refElement.offsetTop <= scrollTopMinus &&
// 			refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
// 		) {
// 			document.querySelector(".menu-scroll").classList.remove("active");
// 			currLink.classList.add("active");
// 		} else {
// 			currLink.classList.remove("active");
// 		}
// 	}
// }

export function onScroll() {
	if (typeof window === "undefined") {
		return;
	}

	const sections = document.querySelectorAll(".menu-scroll");
	const scrollPos =
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop;

	for (let i = 0; i < sections.length; i++) {
		const currLink = sections[i];
		const val = currLink.getAttribute("href");
		const newVal = val.replace(/\//g, "");
		const refElement = newVal && document.querySelector(newVal);
		const scrollTopMinus = scrollPos + 73;
		if (
			refElement &&
			refElement.offsetTop <= scrollTopMinus &&
			refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
		) {
			document.querySelector(".menu-scroll").classList.remove("active");
			currLink.classList.add("active");
		} else {
			currLink.classList.remove("active");
		}
	}
}
