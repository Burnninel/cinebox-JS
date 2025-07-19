import { Header } from "/src/components/Header.js";
import { MovieSection } from "../components/MovieSection.js";

export async function Home() {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(Header());

  const section = await MovieSection("Explorar");
  fragment.appendChild(section);

  return fragment;
}
