import { IconStar, IconStarComplete } from "/src/assets/icons/icons.js";

import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

function createHeader() {
	const header = createElement({
		tag: "header",
		className: "movie-page__reviews-header",
	});

	const title = createElement({
		tag: "h1",
		className: "movie-page__reviews-title",
		textContent: "Avaliações",
	});

	const button = createElement({
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
	});

	header.append(title, button);

	return header;
}

function createProfile(username) {
	const profile = createElement({
		tag: "div",
		className: "movie-page__reviews-profile",
	});

	const user = createElement({
		tag: "div",
		className: "movie-page__reviews-user",
	});

	const avatar = createElement({
		tag: "div",
		className: "movie-page__reviews-avatar",
		children: [htmlToElement(IconStarComplete())],
	});

	const userInfo = createElement({
		tag: "div",
		className: "movie-page__reviews-userinfo",
		children: [
			createElement({
				tag: "span",
				className: "movie-page__reviews-username",
				textContent: username,
			}),
			createElement({
				tag: "span",
				className: "movie-page__reviews-count",
				textContent: "18 filmes avaliados",
			}),
		],
	});

	user.append(avatar, userInfo);

	profile.appendChild(user);

	return profile;
}

function createReviewBody(comment, rating) {
	const reviewsBody =  createElement({
		tag: "div",
		className: "movie-page__reviews-body",
	})

	const commentsCard = createElement({
		tag: "p",
		className: "movie-page__reviews-comment",
		textContent: comment,
	})

	const ratingCard = createElement({
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
						textContent: rating,
					}),
					createElement({
						tag: "span",
						className: "movie-page__reviews-rating-nota-max",
						textContent: "/5",
					}),
				],
			}),
			createElement({
				tag: "div",
				className: "movie-page__reviews-rating-star",
				children: [htmlToElement(IconStarComplete())],
			}),
		],
	});

	reviewsBody.append(commentsCard, ratingCard);

	return reviewsBody;
}

function createItemList(review) {
	return createElement({
		tag: "li",
		className: "movie-page__reviews-item",
		children: [
			createProfile(review.usuario),
			createReviewBody(review.comentario, review.nota),
		],
	});
}

export function createMovieReviewSection(reviews) {
	const reviewSection = createElement({
		tag: "div",
		className: "movie-page__reviews",
		children: [
			createHeader(),
			createElement({
				tag: "ul",
				className: "movie-page__reviews-list",
				children: [...reviews.map((review) => createItemList(review))],
			}),
		],
	});

	return reviewSection;
}
