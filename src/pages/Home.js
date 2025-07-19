import { Header } from "/src/components/Header.js";
import { SectionFilmes } from "../components/SectionFilmes.js";

export async function Home() {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(Header());

  const section = await SectionFilmes("Explorar");
  fragment.appendChild(section);

  return fragment;
}
