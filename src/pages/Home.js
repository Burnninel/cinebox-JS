import { Header } from "/src/components/Header.js";
import { SectionFilmes } from "../components/SectionFilmes.js";

export function Home() {
  return `
    ${Header()}
    ${SectionFilmes("Explorar")}
  `;
}
