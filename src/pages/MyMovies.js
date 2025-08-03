import { Header } from "/src/components/Header.js";
import { MovieSection } from "../components/MovieSection.js";
import { fetchMoviesByUser } from "/src/services/movieService.js";

export async function MyMovies() {
  const fragment = document.createDocumentFragment();
  const { data: { filmes } } = await fetchMoviesByUser();

  fragment.appendChild(Header());

  const section = await MovieSection("Meus Filmes", filmes);
  fragment.appendChild(section);

  return fragment;
}
