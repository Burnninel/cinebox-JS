import { requestApi } from "../helpers/apiHelpers.js";

const API_URL = "http://localhost:8888/filme";

export function fetchAllFilmes() {
  return requestApi(API_URL, "GET");
}

export async function fetchFilmeById(id) {
  return requestApi(`${API_URL}/${id}`, "GET");
}

export async function fetchFilmesByUser() {
  return requestApi(`${API_URL}/meus-filmes`, "GET");
}

export async function createNewFilme() {
  const payload = {
    titulo: "aisaaaai - A lenda",
    diretor: "Jhon Ksennedy",
    categoria: "Ação - Suspense",
    sinopse: "Um filme que supera as leis da física.",
    ano_de_lancamento: "1977",
    imagem: "deadpool.jpg",
  };

  return requestApi(API_URL, "POST", payload);
}

export async function toggleFilmeFavorite(id, action) {
  return requestApi(`${API_URL}/${id}/${action}`, "POST");
}
