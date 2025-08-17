import { Header } from "/src/components/common/Header.js";
import { MovieSection } from "/src/components/movies/MovieSection.js";
import { fetchAllMovies } from "/src/services/movieService.js";

export async function Home() {
  const fragment = document.createDocumentFragment();
  const { data: filmes } = await fetchAllMovies();

  const header = Header();
  fragment.appendChild(header);

  const section = await MovieSection("Explorar", filmes);
  fragment.appendChild(section);

  return fragment;
}
