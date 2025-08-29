import {
	IconStar,
	IconStarComplete,
	IconBack,
} from "/src/assets/icons/icons.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

function createDetailItem(label, value) {
	return createElement({
		tag: "li",
		className: "movie-page__info-item",
		children: [
			createElement({
				tag: "span",
				className: "movie-page__info-label",
				textContent: `${label}: `,
			}),
			createElement({
				tag: "span",
				className: "movie-page__info-value",
				textContent: value,
			}),
		],
	});
}

function createStarItem(icon) {
	return createElement({
		tag: "li",
		className: "movie-page__rating-item",
		children: [htmlToElement(icon())],
	});
}

function createBackButton() {
	return createElement({
		tag: "div",
		className: "movie-page__nav-back",
		children: [
			createElement({
				tag: "button",
				className: "movie-page__btn-back",
				attributes: { type: "button" },
				children: [
					htmlToElement(IconBack()),
					createElement({
						tag: "span",
						className: "movie-page__btn-back-label",
						textContent: "Voltar",
					}),
				],
			}),
		],
	});
}

function createRatingStars(reviewCount, averageRating, maxStars = 5) {
	const stars = [
		...Array.from({ length: Math.round(averageRating) }, () =>
			createStarItem(IconStarComplete)
		),
		...Array.from({ length: maxStars - Math.round(averageRating) }, () =>
			createStarItem(IconStar)
		),
	];

	const starsList = createElement({
		tag: "ul",
		className: "movie-page__rating-stars",
		children: stars,
	});

	const ratingMeta = createElement({
		tag: "div",
		className: "movie-page__rating-meta",
		children: [
			createElement({
				tag: "span",
				className: "movie-page__rating-score",
				textContent: averageRating,
			}),
			createElement({
				tag: "span",
				className: "movie-page__rating-count",
				textContent: `(${reviewCount} avaliações)`,
			}),
		],
	});

	return createElement({
		tag: "div",
		className: "movie-page__rating",
		children: [starsList, ratingMeta],
	});
}

function renderImage(img) {
	return createElement({
		tag: "img",
		className: "movie-page__image",
		attributes: {
			src: `/src/assets/img/${img}`,
		},
	});
}

function createMovieInfoSection(movie) {
	const infoFields = [
		{ label: "Diretor", value: movie.diretor },
		{ label: "Categoria", value: movie.categoria },
		{ label: "Ano", value: movie.ano_de_lancamento },
	];

	const detailsItems = [
		createBackButton(),
		createElement({
			tag: "h1",
			className: "movie-page__title",
			textContent: movie.titulo,
		}),
		createElement({
			tag: "ul",
			className: "movie-page__details-list",
			children: [
				...infoFields.map((item) =>
					createDetailItem(item.label, item.value)
				),
			],
		}),
		createRatingStars(movie.total_avaliacoes, movie.media_avaliacoes),
	];

	const infoSection = createElement({
		tag: "div",
		className: "movie-page__info",
		children: [
			createElement({
				tag: "div",
				className: "movie-page__info-image",
				children: [renderImage(movie.imagem)],
			}),
			createElement({
				tag: "div",
				className: "movie-page__details",
				children: [
					createElement({
						tag: "div",
						className: "movie-page__details-content",
						children: detailsItems,
					}),
					createElement({
						tag: "div",
						className: "movie-page__sinopse-wrapper",
						children: [
							createElement({
								tag: "p",
								className: "movie-page__sinopse",
								textContent: movie.sinopse,
							}),
						],
					}),
				],
			}),
		],
	});

	infoSection.style.setProperty(
		"--bg-image",
		`url("/src/assets/img/${movie.imagem}")`
	);

	return infoSection;
}

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

function createMovieReviewSection(reviews) {
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

export function MovieLayout({ movie, reviews }) {
	const section = createElement({ tag: "section", className: "movie-page" });
	section.appendChild(createMovieInfoSection(movie));
	section.appendChild(createMovieReviewSection(reviews));
	return section;
}
