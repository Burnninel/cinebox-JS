import { IconStarComplete } from "/src/assets/icons/icons.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

function createRating(media) {
	return createElement({
		tag: "div",
		className: "card__rating",
		children: [
			createElement({
				tag: "span",
				className: "card__rating-score",
				textContent: media,
			}),
			createElement({
				tag: "span",
				className: "card__rating-scale",
				textContent: " /5",
			}),
			htmlToElement(IconStarComplete()),
		],
	});
}

export function MovieCard({
	titulo,
	categoria,
	ano_de_lancamento,
	media_avaliacoes,
	imagem,
	sinopse,
}) {
	return createElement({
		tag: "li",
		className: "card",
		children: [
			createElement({
				tag: "img",
				className: "card__image",
				attributes: { src: `/src/assets/img/${imagem}`, alt: imagem },
			}),
			createRating(media_avaliacoes),
			createElement({
				tag: "div",
				className: "card__info",
				children: [
					createElement({
						tag: "h2",
						className: "card__title",
						textContent: titulo,
					}),
					createElement({
						tag: "span",
						className: "card__genre",
						textContent: `${categoria} • ${ano_de_lancamento}`,
					}),
					createElement({
						tag: "p",
						className: "card__sinopse",
						textContent: sinopse,
					}),
				],
			}),
		],
	});
}
