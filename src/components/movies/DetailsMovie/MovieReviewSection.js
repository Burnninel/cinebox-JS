import { IconStar, IconStarComplete } from "/src/assets/icons/icons.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";
import {
	createSpan,
	createParagraph,
	createH1,
	createDiv,
	createUl,
	createLi,
	createButton,
} from "/src/helpers/domHelpers.js";

function createHeader() {
	const header = createElement({
		tag: "header",
		className: "movie-page__reviews-header",
	});

	const title = createH1("movie-page__reviews-title", "Avaliações");

	const button = createButton(
		"movie-page__reviews-button",
		[
			htmlToElement(IconStar()),
			createSpan("movie-page__reviews-button-text", "Avaliar filme"),
		],
		"submit"
	);

	header.append(title, button);

	return header;
}

function createProfile(username) {
	const profile = createDiv("movie-page__reviews-profile");
	const user = createDiv("movie-page__reviews-user");

	const avatar = createDiv("movie-page__reviews-avatar", [
		htmlToElement(IconStarComplete()),
	]);

	const userInfo = createDiv("movie-page__reviews-userinfo", [
		createSpan("movie-page__reviews-username", username),
		createSpan("movie-page__reviews-count", "18 filmes avaliados"),
	]);

	user.append(avatar, userInfo);

	profile.appendChild(user);

	return profile;
}

function createReviewBody(comment, rating) {
	const reviewsBody = createDiv("movie-page__reviews-body");

	const commentsCard = createParagraph(
		"movie-page__reviews-comment",
		comment
	);

	const ratingCard = createDiv("movie-page__reviews-rating", [
		createDiv("movie-page__reviews-rating-score", [
			createSpan("movie-page__reviews-rating-value", rating),
			createSpan("movie-page__reviews-rating-max", "/5"),
		]),
		createDiv("movie-page__reviews-rating-star", [
			htmlToElement(IconStarComplete()),
		]),
	]);

	reviewsBody.append(commentsCard, ratingCard);

	return reviewsBody;
}

function createItemList(review) {
	return createLi("movie-page__reviews-item", [
		createProfile(review.usuario),
		createReviewBody(review.comentario, review.nota),
	]);
}

export function createMovieReviewSection(reviews) {
	const reviewSection = createDiv("movie-page__reviews", [
		createHeader(),
		createUl("movie-page__reviews-list", reviews.map(createItemList)),
	]);

	return reviewSection;
}
