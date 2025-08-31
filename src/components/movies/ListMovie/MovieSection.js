import { DOM } from "/src/helpers/dom/index.js";
import { Element } from "/src/helpers/element/index.js";
import { MovieCard } from "/src/components/movies/ListMovie/MovieCard.js";
import { EmptyMovieMessage } from "/src/components/movies/EmptyMovieMessage.js";
import { IconSearch, IconCreate } from "/src/assets/icons/icons.js";
import { fetchAllMovies } from "/src/services/movieService.js";
import { navigateTo } from "/src/router.js";

function createSearchInput() {
	return DOM.createDiv("explore__search", [
		DOM.createButton({
			className: "explore__search-button",
			children: [DOM.createIcon(IconSearch)],
		}),
		Element.createElement({
			tag: "input",
			attributes: { type: "text", placeholder: "Pesquisar filme" },
		}),
	]);
}

function createAddButton() {
	return DOM.createDiv("explore__add", [
		DOM.createButton({
			className: "explore__add-button",
			children: [
				DOM.createIcon(IconCreate),
				DOM.createSpan("explore__add-button-label", "Novo"),
			],
		}),
	]);
}

function createHeader(title, isMyMoviesPage) {
	return DOM.createHeader("explore-header", [
		DOM.createDiv("explore__title-wrapper", [
			DOM.createH1("explore__title", title),
		]),
		DOM.createDiv("expore__actions", [
			createSearchInput(),
			isMyMoviesPage
				? Element.createElement({
						tag: "hr",
						className: "explore__divider",
				  })
				: null,
			isMyMoviesPage ? createAddButton() : null,
		]),
	]);
}

function renderMovieList(movieList, movies) {
	movieList.replaceChildren();

	movies.forEach((movie) => {
		const card = MovieCard(movie);

		card.addEventListener("click", () => {
			navigateTo(`/filme/${movie.id}`);
		});

		movieList.appendChild(card);
	});
}

function setupAddButton(section) {
	const addButton = section.querySelector(".explore__add-button");
	if (addButton) {
		addButton.addEventListener("click", () => navigateTo("/filme/novo"));
	}
}

function setupSearch(section, movieList) {
	const [searchButton, searchInput] = section.querySelectorAll(
		".explore__search button, .explore__search input"
	);

	async function search() {
		const term = searchInput.value;
		const { data: filteredMovies } = await fetchAllMovies(term);

		const existingEmptyMessage = section.querySelector(".no-results");
		if (existingEmptyMessage) existingEmptyMessage.remove();

		movieList.replaceChildren();
		movieList.style.display = filteredMovies.length ? "flex" : "none";

		if (!filteredMovies.length) {
			section.appendChild(EmptyMovieMessage(term));
		} else {
			renderMovieList(movieList, filteredMovies);
		}
	}

	searchButton.addEventListener("click", search);
	searchInput.addEventListener(
		"keydown",
		(e) => e.key === "Enter" && search()
	);
}

export async function MovieSection(title, movies) {
	const section = DOM.createSection("explore");
	const isMyMoviesPage = window.location.pathname === "/meus-filmes";

	const header = createHeader(title, isMyMoviesPage);

	const movieList = DOM.createUl("explore__card-list");
	section.append(header, movieList);

	renderMovieList(movieList, movies);
	if (isMyMoviesPage) setupAddButton(section);
	setupSearch(section, movieList);

	return section;
}
