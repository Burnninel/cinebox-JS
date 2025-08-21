import { Header } from "/src/components/common/Header.js";
import { MovieSection } from "/src/components/movies/MovieSection.js";
import { fetchMoviesByUser } from "/src/services/movieService.js";

export async function MyMovies(token) {
  const fragment = document.createDocumentFragment();

  const { data: { filmes } } = await fetchMoviesByUser(token);

  fragment.appendChild(Header());

  const section = await MovieSection("Meus Filmes", filmes);
  fragment.appendChild(section);

  return fragment;
}
