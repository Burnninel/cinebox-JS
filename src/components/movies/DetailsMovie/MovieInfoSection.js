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

export function createMovieInfoSection(movie) {
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
