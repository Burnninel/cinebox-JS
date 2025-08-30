import { Header } from "/src/components/common/Header.js";
import { MovieLayout } from "/src/components/movies/DetailsMovie/MovieLayout.js";
import { createElement } from "/src/helpers/createElement.js";
import { fetchMovieById } from "/src/services/movieService.js";

export async function Movie(token, params) {
	const fragment = document.createDocumentFragment();

	const header = Header();
	fragment.appendChild(header);

	const getMovie = await fetchMovieById(params.id);
	const data = getMovie.data;

	const layout = MovieLayout({
		movie: data.filme,
		reviews: data.avaliacoes,
	});

	fragment.appendChild(layout);

	return fragment;
}
