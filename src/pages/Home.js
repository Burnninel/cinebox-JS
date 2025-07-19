import { Header } from "/src/components/Header.js";
import { SectionFilmes } from "../components/SectionFilmes.js";

export function Home() {
  const fragment = document.createDocumentFragment();
  
  fragment.appendChild(Header());
  fragment.appendChild(SectionFilmes('Explorar'));

  console.log(fragment);

  return fragment;
}
