import { DOM } from "/src/helpers/dom/index.js";

export function Loading() {
	return DOM.createDiv(
		"hidden",
		[
			DOM.createDiv(
				"loading-overlay",
				[DOM.createSpan("spinner-border", "")],
				{ role: "status" }
			),
		],
		{ id: "loading" }
	);
}

export function showLoading() {
	document.getElementById("loading").classList.remove("hidden");
}

export function hideLoading() {
	document.getElementById("loading").classList.add("hidden");
}
