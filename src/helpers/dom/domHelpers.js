import { createElement } from "/src/helpers/createElement.js";
import { Element } from "/src/helpers/element/index.js";

export function createHeader(className, children = []) {
	return createElement({ tag: "header", className, children });
}

export function createSection(className, children = []) {
	return createElement({ tag: "section", className, children });
}

export function createForm(className, children = [], attributes = {}) {
	return createElement({ tag: "form", className, children, attributes });
}

export function createDiv(className, children = [], attributes = {}) {
	return createElement({ tag: "div", className, children, attributes});
}

export function createUl(className, children = []) {
	return createElement({ tag: "ul", className, children });
}

export function createLi(className, children = []) {
	return createElement({ tag: "li", className, children });
}

export function createH1(className, text) {
	return createElement({ tag: "h1", className, textContent: text });
}

export function createH2(className, text) {
	return createElement({ tag: "h2", className, textContent: text });
}

export function createParagraph(className, text) {
	return createElement({ tag: "p", className, textContent: text });
}

export function createSpan(className, text) {
	return Element.createElement({ tag: "span", className, textContent: text });
}

export function createInput(className, attributes = {}) {
	return Element.createElement({ tag: "input", className, attributes });
}

export function createTextarea(className, attributes = {}) {
	return Element.createElement({ tag: "textarea", className, attributes });
}

export function createButton({
	className,
	textContent,
	children = [],
	type = "button",
	attributes = {},
}) {
	return createElement({
		tag: "button",
		className,
		textContent,
		children,
		attributes: { type, ...attributes },
	});
}

export function createLink(className, href, children = [], attributes = {}) {
	return Element.createElement({ tag: "a", className, children, attributes: { href, ...attributes } });
}

export function createIcon(icon) {
	return Element.htmlToElement(icon());
}

export function createImage(className, src, attributes = {}) {
	return Element.createElement({
		tag: "img",
		className: className,
		attributes: {
			src: `/src/assets/img/${src}`,
			...attributes,
		},
	});
}
