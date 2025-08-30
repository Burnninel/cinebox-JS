import { MovieCard } from "/src/components/movies/ListMovie/MovieCard.js";
import { EmptyMovieMessage } from "/src/components/movies/EmptyMovieMessage.js";
import { IconSearch, IconCreate } from "/src/assets/icons/icons.js";
import { fetchAllMovies } from "/src/services/movieService.js";
import { navigateTo } from "/src/router.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

function createSearchInput() {
	return createElement({
		tag: "div",
		className: "explore__search",
		children: [
			createElement({
				tag: "button",
				className: "explore__search-button",
				children: [htmlToElement(IconSearch())],
			}),
			createElement({
				tag: "input",
				attributes: { type: "text", placeholder: "Pesquisar filme" },
			}),
		],
	});
}

function createAddButton() {
	return createElement({
		tag: "div",
		className: "explore__add",
		children: [
			createElement({
				tag: "button",
				className: "explore__add-button",
				children: [
					htmlToElement(IconCreate()),
					createElement({ tag: "span", textContent: "Novo" }),
				],
			}),
		],
	});
}

function createHeader(title, isMyMoviesPage) {
	return createElement({
		tag: "header",
		className: "explore-header",
		children: [
			createElement({
				tag: "div",
				children: [
					createElement({
						tag: "h1",
						className: "explore__title",
						textContent: title,
					}),
				],
			}),
			createElement({
				tag: "div",
				className: "expore__actions",
				children: [
					createSearchInput(),
					isMyMoviesPage
						? createElement({
								tag: "hr",
								className: "explore__divider",
						  })
						: null,
					isMyMoviesPage ? createAddButton() : null,
				],
			}),
		],
	});
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
	const section = createElement({ tag: "section", className: "explore" });
	const isMyMoviesPage = window.location.pathname === "/meus-filmes";

	const header = createHeader(title, isMyMoviesPage);

	const movieList = createElement({
		tag: "ul",
		className: "explore__card-list",
	});
	section.append(header, movieList);

	renderMovieList(movieList, movies);
	if (isMyMoviesPage) setupAddButton(section);
	setupSearch(section, movieList);

	return section;
}
