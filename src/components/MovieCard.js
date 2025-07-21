import { IconStarComplete } from "/src/assets/icons/icons.js";

export function MovieCard({
  titulo,
  categoria,
  ano_de_lancamento,
  media_avaliacoes,
  imagem,
  sinopse,
}) {
  const card = document.createElement("li");
  card.className = "card";

  const img = `
    <img src="/src/assets/img/${imagem}" alt="${imagem}" class="card__image">
  `;

  const rating = `
    <div class="card__rating">
        <span class="card__rating-score">${media_avaliacoes}</span>
        <span class="card__rating-scale"> /5</span>
        ${IconStarComplete()}
    </div>
  `;

  const info = `
    <div class="card__info">
        <h2 class="card__title">${titulo}</h2>
        <span class="card__genre">${categoria} • ${ano_de_lancamento}</span>
        <p class="card__sinopse">${sinopse}</p>
    </div>
  `;

  card.innerHTML = (img + rating + info).trim()

  return card;
}
