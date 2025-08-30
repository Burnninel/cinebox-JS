import { createMovieReviewSection } from "/src/components/movies/DetailsMovie/MovieReviewSection.js";
import { createMovieInfoSection } from "/src/components/movies/DetailsMovie/MovieInfoSection.js";
import { createElement } from "/src/helpers/createElement.js";

export function MovieLayout({ movie, reviews }) {
	const section = createElement({ tag: "section", className: "movie-page" });
	section.appendChild(createMovieInfoSection(movie));
	section.appendChild(createMovieReviewSection(reviews));
	return section;
}
