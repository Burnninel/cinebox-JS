import { IconMovie } from "/src/assets/icons/icons";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

export function EmptyMovieMessage(searchTerm) {
	const element = createElement({ tag: "div", className: "no-results" });

	const icon = createElement({
		tag: "div",
		className: "no-results__icon",
		children: [htmlToElement(IconMovie())],
	});

	const message = createElement({
		tag: "div",
		className: "no-results__message-group",
		children: [
			createElement({
				tag: "p",
				className: "no-results__message",
				innerHTML: `Nenhum filme encontrado com "<span class="no-results__value">${searchTerm}</span>"`,
			}),
			createElement({
				tag: "p",
				className: "no-results__message-secondary",
				textContent: "Que tal tentar outra busca?",
			}),
		],
	});

    element.append(icon, message);

	return element;
}
