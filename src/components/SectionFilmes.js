import { CardItem } from "./Card.js";
import { IconSearch } from "../../public/assets/icons/icons.js";

const cards = [
  {
    src: "assets/img/deadpool.jpg",
    alt: "banner_deadpool",
    title: "Deadpool & Wolverine",
    genre: "Ação",
    year: "2023",
    score: "4,5",
  },
  {
    src: "assets/img/mmf.jpg",
    alt: "banner_meu_malvado_favorito4",
    title: "Meu Malvado Favorito 4",
    genre: "Animação",
    year: "2024",
    score: "4,9",
  },
  {
    src: "assets/img/deadpool.jpg",
    alt: "banner_deadpool",
    title: "Deadpool & Wolverine",
    genre: "Ação",
    year: "2023",
    score: "4,5",
  },
  {
    src: "assets/img/mmf.jpg",
    alt: "banner_meu_malvado_favorito4",
    title: "Meu Malvado Favorito 4",
    genre: "Animação",
    year: "2024",
    score: "4,9",
  },
];

const cardListHTML = cards.map((card) => CardItem(card)).join("");

export function SectionFilmes(titulo) {
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
