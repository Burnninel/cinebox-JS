import { IconMovie } from "/src/assets/icons/icons";
import { DOM } from "/src/helpers/dom/index.js";
import { Element } from "/src/helpers/element/index.js";

export function EmptyMovieMessage(searchTerm) {
	const element = DOM.createDiv("no-results");

	const icon = DOM.createDiv("no-results__icon", [DOM.createIcon(IconMovie)]);

	const message = DOM.createDiv("no-results__message-group", [
		Element.createElement({
			tag: "p",
			className: "no-results__message",
			innerHTML: `Nenhum filme encontrado com "<span class="no-results__value">${searchTerm}</span>"`,
		}),
		DOM.createParagraph(
			"no-results__message-secondary",
			"Que tal tentar outra busca?"
		),
	]);

	element.append(icon, message);

	return element;
}
