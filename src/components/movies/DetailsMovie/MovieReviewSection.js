import {
	IconStar,
	IconStarComplete,
} from "/src/assets/icons/icons.js";

import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

function createHeaderReviewSection() {
	return createElement({
		tag: "header",
		className: "movie-page__reviews-header",
		children: [
			createElement({
				tag: "h1",
				className: "movie-page__reviews-title",
				textContent: "Avaliações",
			}),
			createElement({
				tag: "button",
				className: "movie-page__reviews-button",
				attributes: { type: "submit" },
				children: [
					htmlToElement(IconStar()),
					createElement({
						tag: "span",
						className: "movie-page__reviews-button-text",
						textContent: "Avaliar filme",
					}),
				],
			}),
		],
	});
}

export function createMovieReviewSection(reviews) {
	console.log(reviews);
	const reviewSection = createElement({
		tag: "div",
		className: "movie-page__reviews",
		children: [
			createHeaderReviewSection(),
			createElement({
				tag: "ul",
				className: "movie-page__reviews-list",
				children: [
					createElement({
						tag: "li",
						className: "movie-page__reviews-item",
						children: [
							createElement({
								tag: "div",
								className: "movie-page__reviews-profile",
								children: [
									createElement({
										tag: "div",
										className: "movie-page__reviews-user",
										children: [
											createElement({
												tag: "div",
												className:
													"movie-page__reviews-avatar",
												children: [
													htmlToElement(
														IconStarComplete()
													),
												],
											}),
											createElement({
												tag: "div",
												className:
													"movie-page__reviews-userinfo",
												children: [
													createElement({
														tag: "span",
														className:
															"movie-page__reviews-username",
														textContent:
															"Bruno Ismael",
													}),
													createElement({
														tag: "span",
														className:
															"movie-page__reviews-count",
														textContent:
															"18 filmes avaliados",
													}),
												],
											}),
										],
									}),
								],
							}),
							createElement({
								tag: "div",
								className: "movie-page__reviews-body",
								children: [
									createElement({
										tag: "p",
										className:
											"movie-page__reviews-comment",
										textContent:
											"Três amigos de colégio planejam uma festa inesquecível para entrar para a história na tentativa de ficarem famosos. A notícia se espalha rapidamente e tudo foge ao controle quando os imprevistos começam a acontecer. Três amigos de colégio planejam uma festa inesquecível para entrar para a história na tentativa de ficarem famosos. A notícia se espalha rapidamente e tudo foge ao controle quando os imprevistos começam a acontecer.",
									}),
									createElement({
										tag: "div",
										className: "movie-page__reviews-rating",
										children: [
											createElement({
												tag: "div",
												className: "movie-page__reviews-rating-score",
												children: [
													createElement({
														tag: "span",
														className: "movie-page__reviews-rating-nota-value",
														textContent: "4"
													}),	
													createElement({
														tag: "span",
														className: "movie-page__reviews-rating-nota-max",
														textContent: "/5"
													}),	
												]
											}),
											createElement({
												tag: "div",
												className: "movie-page__reviews-rating-star",
												children: [
													htmlToElement(IconStarComplete())
												]
											}),
										]
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});

	return reviewSection;
}