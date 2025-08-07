import { Header } from "/src/components/Header.js";
import { MovieSection } from "/src/components/MovieSection.js";
import { fetchAllMovies } from "/src/services/movieService.js";

export async function Home() {
  const fragment = document.createDocumentFragment();
  const { data: filmes } = await fetchAllMovies();

  fragment.appendChild(Header());

  const section = await MovieSection("Explorar", filmes);
  fragment.appendChild(section);

  return fragment;
}
