import { Header } from "/src/components/Header.js";
import { SectionFilme } from "../components/SectionFilme.js";

export async function Home() {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(Header());

  const section = await SectionFilme("Explorar");
  fragment.appendChild(section);

  return fragment;
}
