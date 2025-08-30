import {
	IconStar,
	IconStarComplete,
	IconBack,
} from "/src/assets/icons/icons.js";

import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";
import { DOM } from "/src/helpers/dom/index.js";

function createDetailItem(label, value) {
	return DOM.createLi("movie-page__info-item", [
		DOM.createSpan("movie-page__info-label", `${label}: `),
		DOM.createSpan("movie-page__info-value", value),
	]);
}

function createStarItem(icon) {
	return DOM.createLi("movie-page__rating-item", [htmlToElement(icon())]);
}

function createBackButton() {
	return DOM.createDiv("movie-page__nav-back", [
		DOM.createButton("movie-page__btn-back", [
			htmlToElement(IconBack()),
			DOM.createSpan("movie-page__btn-back-label", "Voltar"),
		]),
	]);
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

	const starsList = DOM.createUl("movie-page__rating-stars", stars);

	const ratingMeta = DOM.createDiv("movie-page__rating-meta", [
		DOM.createSpan("movie-page__rating-score", averageRating),
		DOM.createSpan(
			"movie-page__rating-count",
			`(${reviewCount} avaliações)`
		),
	]);

	return DOM.createDiv("movie-page__rating", [starsList, ratingMeta]);
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

export function createMovieInfoSection(movie) {
	const infoFields = [
		{ label: "Diretor", value: movie.diretor },
		{ label: "Categoria", value: movie.categoria },
		{ label: "Ano", value: movie.ano_de_lancamento },
	];

	const detailsItems = [
		createBackButton(),
		DOM.createH1("movie-page__title", movie.titulo),
		DOM.createUl("movie-page__details-list", [
			...infoFields.map((item) =>
				createDetailItem(item.label, item.value)
			),
		]),
		createRatingStars(movie.total_avaliacoes, movie.media_avaliacoes),
	];

	const infoSection = DOM.createDiv("movie-page__info", [
		DOM.createDiv("movie-page__info-image", [renderImage(movie.imagem)]),
		DOM.createDiv("movie-page__details", [
			DOM.createDiv("movie-page__details-content", detailsItems),
			DOM.createDiv("movie-page__sinopse-wrapper", [
				DOM.createParagraph("movie-page__sinopse", movie.sinopse),
			]),
		]),
	]);

	infoSection.style.setProperty(
		"--bg-image",
		`url("/src/assets/img/${movie.imagem}")`
	);

	return infoSection;
}
