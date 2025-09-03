import { Header } from "/src/components/common/Header.js";
import { AddMovie } from "/src/components/movies/AddMovie/AddMovie.js";

export async function NewMovie(currentUser) {
	const fragment = document.createDocumentFragment();

	fragment.appendChild(Header());

	const section = await AddMovie(currentUser);
	fragment.appendChild(section);

	return fragment;
}
