import { createMovieReviewSection } from "/src/components/movies/DetailsMovie/MovieReviewSection.js";
import { createMovieInfoSection } from "/src/components/movies/DetailsMovie/MovieInfoSection.js";
import { DOM } from "/src/helpers/dom/index.js";

export function MovieLayout({ movie, reviews }) {
	const section = DOM.createDiv("movie-page");
	section.append(
		createMovieInfoSection(movie),
		createMovieReviewSection(reviews)
	);

	return section;
}
