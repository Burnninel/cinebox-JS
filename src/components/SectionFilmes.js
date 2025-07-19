import { CardItem } from "./Card.js";
import { IconSearch } from "../../public/assets/icons/icons.js";
import { getFilmes } from "../services/FilmesService.js";

export async function SectionFilmes(titulo) {
  const {data: filmes} = await getFilmes();
  const cardListHTML = filmes.map((card) => CardItem(card)).join("");

  const section = document.createElement("section");
  section.className = "explore";
  section.innerHTML = `
      <header class="explore-header">
        <div class="explore__title">
            <h1>${titulo}</h1>
        </div>
        <div class="explore__search">
          ${IconSearch()}
            <input type="text" placeholder="Pesquisar filme" />
        </div>
      </header>
      <ul class="explore__card-list">
          ${cardListHTML}
      </ul>
  `;

  return section;
}
