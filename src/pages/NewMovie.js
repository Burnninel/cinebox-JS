import { Header } from "/src/components/common/Header.js";
import { AddMovie } from "/src/components/movies/AddMovie/AddMovie.js";

export async function NewMovie(token) {
	const fragment = document.createDocumentFragment();

	fragment.appendChild(Header());

	const section = await AddMovie(token);
	fragment.appendChild(section);

	return fragment;
}
