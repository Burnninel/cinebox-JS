import { IconStarComplete } from "/public/assets/icons/icons.js";

export function CardItem({ src, alt, title, genre, year, score }) {
  return `
        <li class="card">
            <img src="${src}" alt="${alt}" class="card__image">
            <div class="card__rating">
                <span class="card__rating-score">${score}</span>
                <span class="card__rating-scale"> /5</span>
                ${IconStarComplete()}
            </div>
            <div class="card__info">
                <h2 class="card__title">${title}</h2>
                <span class="card__genre">${genre} • ${year}</span>
            </div>
        </li>
    `;
}
