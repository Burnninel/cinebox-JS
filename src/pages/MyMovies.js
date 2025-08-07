import { Header } from "/src/components/common/Header.js";
import { MovieSection } from "/src/components/movies/MovieSection.js";
import { fetchMoviesByUser } from "/src/services/movieService.js";
import { getCookieValue } from "/src/helpers/cookieHelpers.js";

export async function MyMovies() {
  const fragment = document.createDocumentFragment();
  
  const token = getCookieValue('token');
  const { data: { filmes } } = await fetchMoviesByUser(token);

  fragment.appendChild(Header());

  const section = await MovieSection("Meus Filmes", filmes);
  fragment.appendChild(section);

  return fragment;
}
