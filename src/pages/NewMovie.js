import { Header } from "/src/components/common/Header.js";
import { AddMovie } from "/src/components/movies/AddMovie.js";

export async function NewMovie() {
  const fragment = document.createDocumentFragment();

  fragment.appendChild(Header());

  const section = await AddMovie();
  fragment.appendChild(section);

  return fragment;
}
