import { DOM } from "/src/helpers/dom/index.js";
import { IconStar, IconStarComplete } from "/src/assets/icons/icons.js";

function createHeader() {
	const header = DOM.createHeader("movie-page__reviews-header");

	const title = DOM.createH1("movie-page__reviews-title", "Avaliações");

	const button = DOM.createButton({
		className: "movie-page__reviews-button",
		children: [
			DOM.createIcon(IconStar),
			DOM.createSpan("movie-page__reviews-button-text", "Avaliar filme"),
		],
		type: "submit"
	});

	header.append(title, button);

	return header;
}

function createProfile(username) {
	const profile = DOM.createDiv("movie-page__reviews-profile");
	const user = DOM.createDiv("movie-page__reviews-user");

	const avatar = DOM.createDiv("movie-page__reviews-avatar", [
		DOM.createIcon(IconStarComplete),
	]);

	const userInfo = DOM.createDiv("movie-page__reviews-userinfo", [
		DOM.createSpan("movie-page__reviews-username", username),
		DOM.createSpan("movie-page__reviews-count", "18 filmes avaliados"),
	]);

	user.append(avatar, userInfo);

	profile.appendChild(user);

	return profile;
}

function createReviewBody(comment, rating) {
	const reviewsBody = DOM.createDiv("movie-page__reviews-body");

	const commentsCard = DOM.createParagraph(
		"movie-page__reviews-comment",
		comment
	);

	const ratingCard = DOM.createDiv("movie-page__reviews-rating", [
		DOM.createDiv("movie-page__reviews-rating-score", [
			DOM.createSpan("movie-page__reviews-rating-value", rating),
			DOM.createSpan("movie-page__reviews-rating-max", "/5"),
		]),
		DOM.createDiv("movie-page__reviews-rating-star", [
			DOM.createIcon(IconStarComplete),
		]),
	]);

	reviewsBody.append(commentsCard, ratingCard);

	return reviewsBody;
}

function createItemList(review) {
	return DOM.createLi("movie-page__reviews-item", [
		createProfile(review.usuario),
		createReviewBody(review.comentario, review.nota),
	]);
}

export function createMovieReviewSection(reviews) {
	const reviewSection = DOM.createDiv("movie-page__reviews", [
		createHeader(),
		DOM.createUl("movie-page__reviews-list", reviews.map(createItemList)),
	]);

	return reviewSection;
}
