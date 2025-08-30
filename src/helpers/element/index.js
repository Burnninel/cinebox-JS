import * as createElement from "./createElement.js";
import * as htmlToElement from "./htmlToElement.js";

export const Element = {
  ...createElement,
  ...htmlToElement
};