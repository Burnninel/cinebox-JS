import { IconStarComplete } from "/src/assets/icons/icons.js";
import { DOM } from "/src/helpers/dom/index.js";

function createRating(media) {
	return DOM.createDiv("card__rating", [
		DOM.createSpan("card__rating-score", media),
		DOM.createSpan("card__rating-scale", " /5"),
		DOM.createIcon(IconStarComplete),
	]);
}

export function MovieCard({
	id,
	titulo,
	categoria,
	ano_de_lancamento,
	media_avaliacoes,
	imagem,
	sinopse,
}) {
	const link = DOM.createLink("card__link", `/filme/${id}`, [
		DOM.createImage("card__image", imagem, { alt: titulo }),
		createRating(media_avaliacoes),
		DOM.createDiv("card__info", [
			DOM.createH2("card__title", titulo),
			DOM.createSpan(
				"card__genre",
				`${categoria} • ${ano_de_lancamento}`
			),
			DOM.createParagraph("card__sinopse", sinopse),
		]),
	]);

	link.addEventListener("click", (e) => {
		e.preventDefault();
		navigateTo(link.href);
	});

	return DOM.createLi("card", [link]);
}
