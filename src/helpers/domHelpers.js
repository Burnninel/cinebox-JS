import { createElement } from "/src/helpers/createElement.js";

export function createSpan(className, text) {
  return createElement({ tag: "span", className, textContent: text });
}

export function createParagraph(className, text) {
  return createElement({ tag: "p", className, textContent: text });
}

export function createDiv(className, children = []) {
  return createElement({ tag: "div", className, children });
}