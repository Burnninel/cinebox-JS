import { Header } from "/src/components/common/Header.js";

export async function Movie(token, id) {
  const fragment = document.createDocumentFragment();

  const header = Header();
  fragment.appendChild(header);

  return fragment;
}
