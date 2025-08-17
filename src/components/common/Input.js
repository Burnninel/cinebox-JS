import { createElement } from "../../helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

export function Input({ icon, attributes = {} }) {
	return createElement({
		tag: "div",
		className: `form__field`,
		children: [
			createElement({
				tag: "div",
				className: "form__input-icon",
				children: [htmlToElement(icon)],
			}),
			createElement({
				tag: "input",
				className: `form__input`.trim(),
				attributes: attributes,
			}),
		],	
	});
}
