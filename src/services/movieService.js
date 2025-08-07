import { apiRequest } from "/src/helpers/apiHelpers.js";

const API_URL = "http://localhost:8888/filme";

export function fetchAllMovies(pesquisar = null) {
  if (pesquisar) {
      return apiRequest(`${API_URL}?pesquisar=${pesquisar}`, "GET");
  }

  return apiRequest(API_URL, "GET");
}

export async function fetchMovieById(id) {
  return apiRequest(`${API_URL}/${id}`, "GET");
}

export async function fetchMoviesByUser(token) {
  return apiRequest(`${API_URL}/meus-filmes`, "GET", null, token);
}

export async function createNewMovie() {
  const payload = {
    titulo: "aisaaaai - A lenda",
    diretor: "Jhon Ksennedy",
    categoria: "Ação - Suspense",
    sinopse: "Um filme que supera as leis da física.",
    ano_de_lancamento: "1977",
    imagem: "deadpool.jpg",
  };

  return apiRequest(API_URL, "POST", payload);
}

export async function toggleMovieFavorite(id, action) {
  return apiRequest(`${API_URL}/${id}/${action}`, "POST");
}
