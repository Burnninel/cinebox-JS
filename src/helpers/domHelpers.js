import { createElement } from "/src/helpers/createElement.js";

export function createSpan(className, text) {
  return createElement({ tag: "span", className, textContent: text });
}

export function createParagraph(className, text) {
  return createElement({ tag: "p", className, textContent: text });
}

export function createH1(className, text) {
  return createElement({ tag: "h1", className, textContent: text });
}

export function createH2(className, text) {
  return createElement({ tag: "h2", className, textContent: text });
}

export function createDiv(className, children = []) {
  return createElement({ tag: "div", className, children });
}

export function createUl(className, children = []) {
  return createElement({ tag: "ul", className, children });
}

export function createLi(className, children = []) {
  return createElement({ tag: "li", className, children });
}

export function createButton(className, children = [], type = "button") {
  return createElement({ tag: "button", className, children, attributes: { type: type } });
}