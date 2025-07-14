import { Header } from "/src/components/Header.js";
import { CardItem } from "/src/components/Card.js";

document.body.insertAdjacentHTML("afterbegin", Header());

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
  }
];

const html = cards
  .map((card) => CardItem(card))
  .join("");

document
  .querySelector(".explore__card-list")
  .insertAdjacentHTML("afterbegin", html);
