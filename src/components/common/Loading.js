import { createElement } from "/src/helpers/createElement.js";

export function Loading() {
	return createElement({
		tag: "div",
		className: "hidden",
		attributes: { id: "loading" },
		children: [
			createElement({
				tag: "div",
				className: "loading-overlay",
				attributes: { role: "status" },
				children: [
					createElement({
						tag: "span",
						className: "spinner-border",
					}),
				],
			}),
		],
	});
}

export function showLoading() {
	document.getElementById("loading").classList.remove("hidden");
}

export function hideLoading() {
	document.getElementById("loading").classList.add("hidden");
}
