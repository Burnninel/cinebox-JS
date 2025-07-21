import { IconMovie } from "/src/assets/icons/icons";

export function EmptyMovieMessage(searchTerm) {
  const element = document.createElement("div");
  element.className = "no-results";

  const icon = `
    <div class="no-results__icon">
        ${IconMovie()}
    </div>
  `;

  const message = `
    <div class="no-results__message-group">
        <p class="no-results__message">
            Nenhum filme encontrado com "<span class="no-results__value">${searchTerm}</span>"
        </p>
        <p class="no-results__message-secondary">
            Que tal tentar outra busca?
        </p>
    </div>
  `;

  element.innerHTML = (icon + message).trim();

  return element;
}
